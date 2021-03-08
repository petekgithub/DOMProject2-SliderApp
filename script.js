var breads = [
    {
        name: 'Thyme bread',
        image: 'img/bread1.jpg',
        description: 'oatmeal,oatmeal,oatmeal,oatmeal,oatmeal,oatmeal,oatmeal,oatmeal',
        link: 'https://www.cobsbread.com/'

    },
    {
        name: 'Hearth bread',
        image: 'img/bread2.jpg',
        description: 'poppy seeds,poppy seeds,poppy seeds,poppy seeds,poppy seeds,poppy seeds,poppy seeds,poppy seeds'

    },
    {
        name: 'Olive bread',
        image: 'img/bread3.jpg',
        description: 'sesame,sesame,sesame,sesame,sesame,sesame,sesame,sesame'

    },
    {
        name: 'Sesame bread',
        image: 'img/bread4.jpg',
        description: 'milky,milky,milky,milky,milky,milky,milky,milky,'

    },
    {
        name: 'Grassy bread',
        image: 'img/bread5.jpg',
        description: 'olive,olive,olive,olive,olive,olive,olive,olive,'

    },
    {
        name: 'Milky bread',
        image: 'img/bread6.jpg',
        description: 'olive,olive,olive,olive,olive,olive,olive,olive,'

    }
]

var index = 0;
var slaytCount = breads.length;
var interval;

var settings = {
    duration: '2000',
    random: false
}

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function() {
    index--;
    showSlide(index);
    console.log(index);
});

        
document.querySelector('.fa-arrow-circle-right').addEventListener('click', function() {
    index++;
    showSlide(index);
    console.log(index);
});

document.querySelectorAll('.arrow').forEach(function(item) {
    item.addEventListener('mouseenter',function() {
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item) {
    item.addEventListener('mouseleave',function() {
        init(settings);
    })
});


function init(settings) {

    var prev;
    interval = setInterval(function() {

        if (settings.random) {
            //random index
            do {
                index = Math.floor(Math.random()*slaytCount);
            }while(index == prev) // üstüste aynı indeksler gelmesin
            prev = index;
            
        } else {
            if (slaytCount == index+1) { // son slaya gelmişsen başa dön
                index = -1; // 0.cı indeksten başladığı için -1
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        showSlide(index);   

    },settings.duration)
}

function showSlide(i) {

    index = i;
    if (i < 0) {
        index = slaytCount - 1;
    }
    if ( i >= slaytCount) {
        index = 0;
    }

document.querySelector('.card-title').textContent = breads[index].name;
document.querySelector('.card-img-top').setAttribute('src',breads[index].image);
document.querySelector('.card-link2').setAttribute('href',breads[index].link);


}

