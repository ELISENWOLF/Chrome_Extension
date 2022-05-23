function reload(){
    let Anime = [
    "https://media1.popsugar-assets.com/files/thumbor/1raGobGDcCHb7ab43lwVIdC3Qg0/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2021/04/10/728/n/41541398/1b3d7a3f6071d23d6cd988.80850581_/i/best-anime-tv-shows-on-netflix.jpg",
    "https://assets3.thrillist.com/v1/image/2953314/1584x1056/crop;jpeg_quality=60;progressive.jpg",
    "https://gizmostory.com/wp-content/uploads/2020/12/anime.jpeg",
    "https://cdn.pastemagazine.com/www/articles/2021/06/10/one-punch-main-small.jpg",
    "https://assets1.ignimgs.com/2019/11/21/top25anime-blogroll-1574296153994_160w.jpg?width=1280",
    "https://c4.wallpaperflare.com/wallpaper/703/917/280/bleach-final-getsuga-ichigo-wallpaper-thumb.jpg",
    "https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png/revision/latest/scale-to-width-down/300?cb=20210223094656",
    "https://sportshub.cbsistatic.com/i/2021/09/27/ac2ad058-b99c-4bec-ac2c-5df28cf5e0cf/naruto-baryon.png",
    "https://cdn.vox-cdn.com/thumbor/Vf9MRpCAs2XQePTeXjpdDyBhfa0=/0x0:1920x1080/920x613/filters:focal(807x387:1113x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69189411/Demon_Slayer_Flame.0.jpg",
    "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/04/Adult-Gon-Featured.jpg?q=50&fit=crop&w=767&h=450&dpr=1.5",
    "https://media.comicbook.com/2021/02/when-will-attack-on-titan-season-4-end-1258488.jpeg?auto=webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq4MSDsyY1NFh3IYCYRWkjBqxzJfo-QefDJw&usqp=CAU",
    "https://spoilerguy.com/wp-content/uploads/2021/01/anime-koe-no-katachi-shouko-nishimiya-shouya-ishida-wallpaper-preview.jpg",
    "https://kawaii-mobile.com/wp-content/uploads/2017/05/Koe-no-Katachi.Android-wallpaper-2160x1920.jpg",
    "https://cdn.theatlantic.com/thumbor/GrtBb9pygMb_h22FcO-yPSVqMuw=/79x44:1843x1036/960x540/media/img/mt/2017/04/your_name-1/original.jpg",
    "https://filmdaze.net/wp-content/uploads/2018/06/vlcsnap-2018-06-13-16h56m12s456.png"
];

const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++){
    const randomImg = Math.floor(Math.random() * Anime.length);
    console.log(randomImg)
    imgs[i].src = Anime[randomImg];
}

const text = document.getElementsByTagName("title");
for(let i = 0; i < text.length; i++){
    text[i].innerText = "Anime_HACKED :)";
}

const header1 = document.getElementsByTagName("h1");
for(let i = 0; i < header1.length; i++){
    header1[i].innerText = "Anime_HACKED :)";
}

const header2 = document.getElementsByTagName("h2");
for(let i = 0; i < header2.length; i++){
    header2[i].innerText = "Anime_HACKED :)";
}

const header3 = document.getElementsByTagName("h3");
for(let i = 0; i < header3.length; i++){
    header3[i].innerText = "Anime_HACKED :)";
}

const header4 = document.getElementsByTagName("h4");
for(let i = 0; i < header4.length; i++){
    header4[i].innerText = "Anime_HACKED :)";
}

const header5 = document.getElementsByTagName("h5");
for(let i = 0; i < header5.length; i++){
    header5[i].innerText = "Anime_HACKED :)";
}

const header6 = document.getElementsByTagName("h6");
for(let i = 0; i < header6.length; i++){
    header6[i].innerText = "Anime_HACKED :)";
}

const paragraphs = document.getElementsByTagName("p");
for(let i = 0; i < paragraphs.length; i++){
    paragraphs[i].innerText = "HACKED";
}

const para = document.getElementsByTagName("span");
for(let i = 0; i < para.length; i++){
    para[i].innerText = "HACKED";
}
}
setInterval(reload,5000);

fetch("https://api.chucknorris.io/jokes/random")//fetch joke to newpage.html
.then(response => response.json())
.then(data => {
let joke = data.value
let print = document.getElementById("jokes");
print.innerHTML = joke
})

let show=document.getElementById("btn");//print hello,<name> in popuup  
function display(){
    let name=document.getElementById("name").value;
    let display=document.getElementById("display");
    display.innerHTML="Hello" +","+ name;
}
show.addEventListener("click",display)
