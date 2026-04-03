// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message, recaptchaToken } = await request.json();

    // Validation des données
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    // Vérification reCAPTCHA (protection anti-robot)
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: 'Veuillez vérifier que vous n\'êtes pas un robot' },
        { status: 400 }
      );
    }

    // Vérifier le token reCAPTCHA avec Google
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      { method: 'POST' }
    );
    
    const recaptchaData = await recaptchaResponse.json();
    
    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return NextResponse.json(
        { error: 'Vérification robot échouée' },
        { status: 400 }
      );
    }

    // Configuration du transporteur email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email pour toi (notification)
    const mailToYou = {
      from: process.env.EMAIL_USER,
      to: 'winnerluyeye1@gmail.com',
      subject: `Nouveau message de ${name} - Kerith Ressources`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #003233; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f9f9f9; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #003233; }
            .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #cf8e02; }
            .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>📬 Nouveau message de contact</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Nom complet :</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">📧 Email :</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">💬 Message :</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>Message envoyé depuis le formulaire de contact de Kerith Ressources</p>
              <p>Date: ${new Date().toLocaleString('fr-FR')}</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Email de confirmation pour l'utilisateur
    const mailToUser = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Confirmation de votre message - Kerith Ressources',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #003233; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f9f9f9; }
            .message-box { background: white; padding: 15px; border-left: 3px solid #cf8e02; margin: 15px 0; }
            .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Merci de nous avoir contactés !</h2>
            </div>
            <div class="content">
              <p>Bonjour ${name},</p>
              <p>Nous avons bien reçu votre message et nous vous en remercions. Notre équipe vous répondra dans les plus brefs délais.</p>
              <p><strong>Rappel de votre message :</strong></p>
              <div class="message-box">
                ${message.replace(/\n/g, '<br>')}
              </div>
              <p>Cordialement,</p>
              <p><strong>L'équipe Kerith Ressources</strong></p>
            </div>
            <div class="footer">
              <p>Cet email est une confirmation automatique, merci de ne pas y répondre.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Envoi des emails
    await transporter.sendMail(mailToYou);
    await transporter.sendMail(mailToUser);

    return NextResponse.json(
      { message: 'Message envoyé avec succès' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    );
  }
}