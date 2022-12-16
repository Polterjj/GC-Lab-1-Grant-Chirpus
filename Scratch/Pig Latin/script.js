

function translate (string) {
    let vowels = ["a", "e", "i", "o", "u"];
    string = string.toLowerCase()
    if(vowels.indexOf(string[0]) > -1){
        return (string = string + "way")
    }

}
translate("Apple")