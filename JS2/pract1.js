function pract1(){
    function arrayToEnumerationString (arr)
    {
        let last = arr.pop ();
        return arr.join (", ") + ((arr.length > 0) ? " and " : "") + last;
    }

    console.log (arrayToEnumerationString (["test"]));
    console.log (arrayToEnumerationString (["horse", "pig"]));
    console.log (arrayToEnumerationString (["one", "two", "three", "four"]));
}