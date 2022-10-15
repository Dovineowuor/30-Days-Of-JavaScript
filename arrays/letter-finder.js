function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

letterFinder(" I love JavaScript, It is a relationship where we dont utter any word but each one of us move out satisfied"
, "t")

