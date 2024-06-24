function foobar(foo, bar) {
    return foo + bar + "1";
}


foobar("foo", 5);

export{}; // Datei wird als Modul behandelt, um globalen Scope zu verhindern