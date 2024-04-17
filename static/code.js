function handle_change(){
    console.log("hiiiii")
    const choice = document.getElementById("select");
    const option = choice.value;
    const image = document.getElementById('image');
    image.src = `./static/${option}.jpg`
}