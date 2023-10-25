import fs from 'fs';

export async function generateEmailContentObject(){  
  try {
    const subject = await fs.promises.readFile('./email-content/subject.txt', 'utf8');
    const body = await fs.promises.readFile('./email-content/body.txt', 'utf8');
    
    const emailContent = {
      "subject": subject,
      "body": body
    }

    return emailContent;

  } catch (err) {
    console.error("generateEmailContentObject stopped, and says: "+err.message);
  }
};

//generateEmailContentObject().then(result => {console.log(result);});