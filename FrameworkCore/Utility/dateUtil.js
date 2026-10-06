const dayjs=require('dayjs');

function fromNow(amount,unit='year'){
    return dayjs().add(amount,unit).format('YYYY-MM-DDTHH:mm');
}
module.exports={fromNow};