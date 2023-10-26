export let emailList = [
    {
        email: 'hjedrzejewsky0@ifeng.com',
        receiveMarketing: true,
    },
    {
        email: 'sdurgan1@godaddy.com',
        receiveMarketing: true,
    },
    {
        email: 'tmattimoe2@homestead.com',
        receiveMarketing: true,
    },
    {
        email: 'llamberti3@opera.com',
        receiveMarketing: true,
    },
    {
        email: 'dmanhood4@smugmug.com',
        receiveMarketing: false,
    },
    {
        email: 'jkrout5@xrea.com',
        receiveMarketing: false,
    },
    {
        email: 'cchappell6@techcrunch.com',
        receiveMarketing: false,
    },
    {
        email: 'gropp7@hhs.gov',
        receiveMarketing: false,
    },
    {
        email: 'gbackshaw8@utexas.edu',
        receiveMarketing: false,
    },
    {
        email: 'sgreeninn@digg.com',
        receiveMarketing: true,
    },
    {
        email: undefined, // email undefined para validação
        receiveMarketing: true,
    }
];

export function printEmailList(emailList) {
    emailList.forEach((e, i) => {
        console.log(i + 1, e);
    });
};
