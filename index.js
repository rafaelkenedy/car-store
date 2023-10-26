import { emailList } from  './email-list.js';
import { isMonday } from './week-day-validation.js';
import { generateEmailContentObject } from './email-content-generator.js';
import { enviarEmail } from './email-service.js';

async function fireNewsletter(){
    if(isMonday()){
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
    } else console.log("Erro ao enviar newsletter, tente novamente segunda-feira!")
}

fireNewsletter();