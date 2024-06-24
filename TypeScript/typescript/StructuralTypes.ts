interface Dog {
    name: string;
    size: number;
    age?: number;
}

function bark(dog: Dog): void {
    console.log(`${dog.name} is barking`);
}

const bello =
{
    name: "Bello",
    size: 5,
};

const Golf =
{
    brand: "VW",
    speed: 200,
};

bark(bello);
bark(car);











export{}; // Datei wird als Modul behandelt, um globalen Scope zu verhindern