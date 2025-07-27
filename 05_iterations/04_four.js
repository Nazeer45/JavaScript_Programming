const myObject = {
    js: "Javascript",
    cpp: "C++",
    py: "Python",
    rb: "Ruby"
}

for (const key in myObject) {
    // console.log(`${key} shortcut for ${myObject[key]}`);
}


//arrays
const programmingLanguages = ["js", "cpp", "py", "rb"]

for (const key of programmingLanguages) {
    console.log(`${key} shortcut for ${myObject[key]}`);
}