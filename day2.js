const a = 6;

if (a === 5) {
    console.log('a는 5입니다')
} else if (a===10) {
    console.log('a는 10입니다')
} else {
    console.log('a는 5도아니고 10도 아닙니다')
}

// if else if else

const device = 'tv';

switch (device) {
    case 'samsung':
        console.log('삼성꺼다!')
        break;
    case 'lg':
        console.log('lg꺼다!')
        break;
    default:
        console.log('해당사항이 없습니다!');
}