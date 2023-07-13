import express from 'express';
import nodemailer from 'nodemailer';

const app = express();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: 'joaco.elia9@gmail.com',
        pass: 'vywrqjpnqgcavmhv'
    }
})

app.get('/mail', async ( req, res ) => {
    await transporter.sendMail({
        from: 'Coderhouse backend',
        to: 'joaquin.elia@hotmail.com',
        subject: 'Correo de prueba',
        html : `<div>
                    <h1>Hola, esto es una prueba de envio de correo usando gmail</h1>
                    <img src="cid:character" />
                </div>`,
        attachments: [
            {
                filename: 'character.jpg',
                path: './character.jpg',
                cid: 'character'
            },
            {
                filename: 'character.jpg',
                path: './character.jpg',
                cid: 'character'
            }
        ]     
    });
    res.send('Correo enviado')
});

app.listen(8080)
