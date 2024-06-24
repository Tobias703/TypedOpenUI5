interface Dog {
    name: string;
    size: number;
    age?: number;
}

const bello: Dog = {
    name: "Bello",
    height: 5,
};



const wuffi: Dog = {
    name: "Wuffi",
    size: "2"
};





const wauzi: Dog = {
    name: "Wauzi",
    age: 2,
};





console.log(bello.name);
console.log(wuffi.name);
console.log(wauzi.age);

export{}; // Datei wird als Modul behandelt, um globalen Scope zu verhindern