export function isMonday(){
    //getDay() retorna 0-6, logo dia 0 é domingo.
    const today = new Date();
    const weekDay = today.getDay();

    return weekDay === 1 ? true : false;
};
