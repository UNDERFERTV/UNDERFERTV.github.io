function LoadMostLiked() {
    const Container = document.getElementById("MostLiked");
    if (!Container) return;

    const Items = [
        {
            link: `https://www.deviantart.com/underfertv/art/Frisk-tried-to-fight-950801782`,
            image: `Images/mostliked/Frisk_tried_to_fight.jpg`,
        },
        {
            link: `https://www.deviantart.com/underfertv/art/Chara-Vore-Animation-Mp4-in-description-960842831`,
            image: `Images/mostliked/Chara_Vore_Animation.gif`,
        },
        {
            link: `https://www.deviantart.com/underfertv/art/Vanessa-on-Cam-Roblox-Vore-8-966861522`,
            image: `Images/mostliked/Vanessa_on_cam.jpg`,
        },
        {
            link: `https://www.deviantart.com/underfertv/art/Circus-Baby-Vore-981935860`,
            image: `Images/mostliked/Circus_Baby_Vore.jpg`,
        },
        {
            link: `https://www.deviantart.com/underfertv/art/Toy-chica-had-fun-this-night-982205428`,
            image: `Images/mostliked/Toy_chica_had_fun_this_night.jpg`,
        },
        {
            link: `https://www.deviantart.com/underfertv/art/ballora-ate-something-or-someone-983067129`,
            image: `Images/mostliked/Ballora_ate_something.jpg`,
        },
        {
            link: `https://www.deviantart.com/underfertv/art/Animation-Forced-inflation-on-2-girls-986970534`,
            image: `Images/mostliked/Forced_Inflation_on_2_girls.jpg`,
        },
        {
            link: `https://www.deviantart.com/underfertv/art/Animation-Tube-Forced-Inflation-998204304`,
            image: `Images/mostliked/Tube_Forced_Inflation.jpg`,
        },
        {
            link: `https://www.deviantart.com/underfertv/art/I-think-it-was-delicious-998679020`,
            image: `Images/mostliked/I_think_it_was_delicious.jpg`,
        },
        {
            link: `https://www.deviantart.com/underfertv/art/Goodnight-1000354871`,
            image: `Images/mostliked/Goodnight.jpg`,
        },
        {
            link: `https://www.deviantart.com/underfertv/art/Sky-Blue-Vore-1065549942`,
            image: `Images/mostliked/Sky_blue_vore.jpg`,
        },
        {
            link: `https://www.deviantart.com/underfertv/art/I-like-you-stuffed-1057258130`,
            image: `Images/mostliked/I_like_you_stuffed.jpg`,
        },

    ];

    Items.forEach(thing => {

        document.getElementById("MostLiked").innerHTML += '<a href="' + thing.link + '" target="_blank"> <img src="' + thing.image + '" class="MostLiked_img"> </a>';

    });

    Container.scrollLeft = 0;

}

function LoadVideoGallery() {
    const Container = document.getElementById("Videos");
    if (!Container) return;

    const Items = [
        {
            link: `https://mega.nz/file/w4QiABSI#W4314uTqQXgQ-vpyonh9Rd1wo-_gzQOxlDiUZfY4gY8`,
            image: `../Images/youtubecovers/Angelica_Commission.png`,
            title: `Angelica's Kiddnaping`,
            description: `Angelica, worker of caffee, gets kiddnaped and fuck machines were used on her.`,
            type: `MEGA`,
        },
        {
            link: `https://mega.nz/file/p5xVFQoQ#rV7ciqIOb2lqEi2zPoKEFbHYHG8rDvIuEa8Nomyt87A`,
            image: `../Images/youtubecovers/GF_Forced_Inflation.png`,
            title: `Lullaby GF forced inflation`,
            description: `Lullaby GF wakes up tied up. Forced inflated, and hypnotized.`,
            type: `MEGA`,
        },
        {
            link: `https://mega.nz/file/5l4GFBRC#OiCnxyPgWjyzzSR8Q2pfZO0sS_P2UFpDBmxIvYXaf-4`,
            image: `../Images/youtubecovers/circus_baby_snack.jpg`,
            title: `Circus baby snack`,
            description: `Circus baby eats small Ballora.`,
            type: `MEGA`,
        },
        {
            link: `https://www.youtube.com/watch?v=1Z7l_XbimYo`,
            image: `../Images/youtubecovers/SkyVoresBF.jpg`,
            title: `Sky Blue vore`,
            description: `Sky blue vores Boyfriend.`,
            type: `Youtube`,
        },
        {
            link: `https://www.youtube.com/watch?v=ZWZksbSKlkw&feature=youtu.be`,
            image: `../Images/youtubecovers/TubeForcedInflation.jpg`,
            title: `Tube forced belly inflation`,
            description: `Girl falls asleep and wakes up tied up.`,
            type: `Youtube`,
        },
        {
            link: `https://www.youtube.com/watch?v=sflWmJoeFwI&feature=youtu.be`,
            image: `../Images/youtubecovers/AbandonedFactoryForcedInflation.jpg`,
            title: `Forced Inflation in abandoned factory`,
            description: `Two tied up girls force inflated.`,
            type: `Youtube`,
        },
        {
            link: `https://www.youtube.com/watch?v=Iag73qHSEjs&feature=youtu.be`,
            image: `../Images/youtubecovers/TogaVoresUraraka.jpg`,
            title: `Toga vores Uraraka`,
            description: `Toga breaks into Uraraka's house and vores her.`,
            type: `Youtube`,
        },
        {
            link: `https://www.youtube.com/shorts/gvGL7g0Jan8`,
            image: `../Images/youtubecovers/CharaVoresFrisk.jpg`,
            title: `Chara vores Frisk`,
            description: `Animated version of "Frisk tried to fight"`,
            type: `Youtube`,
        },
    ];

    Items.forEach(thing => {

        document.getElementById("Videos").innerHTML += `
        <section class="Container_Video Center" style="padding:8px;">
            <section class="VideoGallery_Container_Photo">
                <a href="` + thing.link + `" target="_blank"> <img src="` + thing.image + `" class="VideosImg"> </a>
            </section>

            <section class="VideoGallery_Container_Info">
                
                <h2>` + thing.title + `</h2> <br style="font-size:2px;">
                <p>` + thing.description + `</p>
                <p style="font-size:10px;"> Watch on ` + thing.type + `</p> <br>
            </section>
        </section>`

    });

    Container.scrollLeft = 0;

}


function Load() {
    LoadMostLiked()
}
