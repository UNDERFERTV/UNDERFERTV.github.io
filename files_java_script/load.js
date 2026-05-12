let Comssision_status = `Commission <span style="color:orange;">semi-closed</span> <br> <small><small> Contact me to learn more. </small></small>`

const video_gallery = document.getElementById("video_gallery")
const commission_status_label = document.getElementById("commission_status_label")
function load(){
    console.log("loading")
        video_gallery.innerHTML = `
        ${Video_New("Girlfriend's magic", "https://www.deviantart.com/underfertv/art/1153684494")}
        ${Video_New("Endurance test", "https://www.deviantart.com/underfertv/art/1311698730")}
        ${Video_New("Scrap Baby off guard attack", "https://www.deviantart.com/underfertv/art/1153684494")}
        ${Video_New("Circus Baby got into the office", "https://www.deviantart.com/underfertv/art/1297760836")}
        ${Video_New("Merry Christmas 2025", "https://www.deviantart.com/underfertv/art/1273562605")}
        ${Video_New("2K watchers special", "https://www.deviantart.com/underfertv/art/1153684494")}
        ${Video_New("Nighttime fun with an air tank", "https://www.deviantart.com/underfertv/art/1153684494")}
        ${Video_New("Angelica's kiddnaping", "https://www.deviantart.com/underfertv/art/1153684494")}
        ${Video_New("Sister Angela vs Demons", "https://www.deviantart.com/underfertv/art/1153684494")}
        ${Video_New("Lullaby GF Forced Inflation", "https://www.deviantart.com/underfertv/art/1153379557")}
        ${Video_New("Circus Baby snack", "https://www.deviantart.com/underfertv/art/1114668423")}
        ${Video_New("Sky vores Boyfriend", "https://www.deviantart.com/underfertv/art/1067613992")}
        ${Video_New("Samus breast expansion", "https://www.deviantart.com/underfertv/art/1025415333")}
        ${Video_New("Tube Forced Inflation", "https://www.deviantart.com/underfertv/art/998204304")}
        ${Video_New("Forced inflation on 2 girls", "https://www.deviantart.com/underfertv/art/986970534")}
        ${Video_New("Toga Vores Uraraka", "https://www.deviantart.com/underfertv/art/964895352")}
        ${Video_New("Chara Vore Animation", "https://www.deviantart.com/underfertv/art/960842831")}
    `


    commission_status_label.innerHTML = Comssision_status
}

function Video_New(name, link){
    console.log("New video: ", name)
    let image_file = `images/video_cover/cover_${name.replace(/'/g, "").replace(/\s+/g, "_").toLowerCase()}.png`

    return `
        <a href="${link}" target="_black">
        <div class="video_box" style="background-image: url('${image_file}');">

        </div>
        </a>
    `
}

document.addEventListener("load", load());
