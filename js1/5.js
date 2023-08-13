let typeOfpackage='express'
switch(typeOfpackage){
    case'standard':
    console.log('might take 3-5 days');
    break;
    case'express':
    console.log('might take 1-2 days');
    break;
    case'overnight':
    console.log('would be dilivered next day');
    break;
    default:
        console.log('invalid');
}