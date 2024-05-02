//for hour 12hr->360 so 1hr->360/12=30 deg
//60min->30 so 1min->30/60=(1/2)deg
//for h hour=(30h+ m/2)deg where h=hours, m=minute
//for minute
//60 min->360deg
//1min->6deg
//for m minutes->6m deg
//for seconds 60seconds->360deg
//s sec->6s deg 

setInterval(() => {
    date=new Date();
    htime=date.getHours();
    mtime=date.getMinutes();
    stime=date.getSeconds();
    hrotation= 30*htime+mtime/2;
    mrotation= 6*mtime;
    srotation= 6*stime;

    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;
}, 1000);