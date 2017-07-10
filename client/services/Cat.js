/**
 * Created by benpurslow on 07/07/2017.
 */
import {sleep} from '../utils/utils'
import catImage1 from '../img/cat1.png'
import catImage2 from '../img/cat8.png'

export function fetchCatData(name) {
    // Ajax call to go and get the cat data
    // Silly fake id function
    const splitName = name.split("-");
    const id = splitName[splitName.length-1];

    if (id > 9 || id < 1) {
        return sleep(500).then(() => {
            return {
                success: false
            }
        });
    }
    return sleep(500).then(() => {
        return {
            success: true,
            id: id,
            name : "Kitty Moaw-Moaw No. " + id,
            title : "Test Title " + id,
            slug: "kitty-moaw-moaw-" + id,
            body : `"Look here, friend," said I, "if you have anything important to tell us, out with it; but if you are only trying to bamboozle us, you are mistaken in your game; that's all I have to say." "And it's said very well, and I like to hear a chap talk up that way; you are just the man for him—the likes of ye. Morning to ye, shipmates, morning! Oh! when ye get there, tell 'em I've concluded not to make one of 'em." "Ah, my dear fellow, you can't fool us that way—you can't fool us. It is the easiest`,
            likes : 10,
            userHasLiked : false,
            image: catImage2
        }
    })
}

export function fetchCatList() {
    // Ajax call to go and get the cat list
    return sleep(500).then(() => {
        let catList = [];
        for(let i = 1; i < 10; i++) {
            catList.push({
                id: i,
                name : "Kitty Moaw-Moaw No." + i,
                title : "Test Title",
                slug: "kitty-moaw-moaw-" + i,
                likes : 10,
                userHasLiked : false,
                image : catImage1
            })
        }
        return catList
    })
}

export function fetchCatAlternatives() {
    // Ajax call to go and get the cat list
    return sleep(500).then(() => {
        let alternativeList = [];
        for(let i = 1; i < 10; i++) {
            alternativeList.push({
                id: i,
                name : "Kitty Moaw-Moaw No." + i,
                title : "Test Title",
                slug: "kitty-moaw-moaw-" + i,
                likes : 10,
                userHasLiked : false,
                image : catImage1
            })
        }
        return alternativeList
    })
}