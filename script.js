function checkmehforpalines() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output")
    const tempinput = input.split("");
    const splitted = input.split("");
    splitted.reverse();

    // debug
    // alert(tempinput);
    // alert(splitted);

    if (tempinput.join() === splitted.join()) {
        output.innerHTML = `${input} is a Palindrome!`;
    } else {
        output.innerHTML = `${input} is not a palindrome, the reversal of the input is ${splitted.join("")}`;
    };
}   