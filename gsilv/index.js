import { emailList } from  '../gsilv/email-list.js';
import { isMonday } from '../gsilv/week-day-validation.js';
import { generateEmailContentObject } from '../gsilv/email-content-generator.js';
import { enviarEmail } from '../gsilv/email-service.js';

async function fireNewsletter(){
    if(true){ // TODO trocar por isMonday() ao final dos testes
        const emailContent = await generateEmailContentObject();
        emailList.forEach(client => {
            if(client.receiveMarketing){
                try {
                    const response = enviarEmail(client.email, emailContent.subject, emailContent.body); // TODO tirar aspas
                    console.log("Status: "+response.status+"\nMessage: "+response.message+"\n\t\t### ### ###");
                } catch (error) {
                    console.log(error.status, error.message)
                }
            }
        })
    }
}

fireNewsletter();