/**
 * Created by benpurslow on 07/07/2017.
 */

export function sleep(ms){
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms); // (A)
    });
}