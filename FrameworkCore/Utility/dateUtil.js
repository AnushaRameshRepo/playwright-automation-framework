const dayjs=require('dayjs');

function fromNow(amount,unit='year'){
    return dayjs().add(amount,unit).format('YYYY-MM-DDTH:mm');
}
module.exports={fromNow};