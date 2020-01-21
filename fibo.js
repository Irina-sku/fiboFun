document.getElementById('run').addEventListener('click', function () {
    //fibo();
    fiboImproved();
    fiboBySearch();
});

function fibo() {
    let arr = [0,1];
    for (var i = 0; 10; i++) {
        let nxt = arr[i] + arr[i+1];
        arr.push(nxt);
    }
    console.log(arr)
}

function fiboImproved() {
    let arr = [0,1];
    for (var i = 0; i < 10 ;i++) {
        arr[i+2] = arr[i] + arr[i+1];
    }
    console.log(arr);
}

function fiboBySearch() {
      let userInput = document.getElementById('input').value;
      let arr = [0,1];
      for (var i = 0; i < userInput; i++) {
          arr[i+2] = arr[i] + arr[i+1];
      }
      console.log(arr[userInput-1]);
}
