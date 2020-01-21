document.getElementById('run').addEventListener('click', function () {
    fibo();
    fiboImproved();
    fiboBySearch();
    toggleFibo();
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

function toggleFibo() {
    let userInput = document.getElementById('input').value;
    let arr = [0,1];
    let bool = true;
    for (var i = 0; i < userInput - 1; i++) {
        if (bool === true) {
            arr[0] += arr[1];
            bool = false;
        } else {
            arr[1] += arr[0];
            bool = true;
        }
    }
    if (userInput%2 === 0) {
        console.log(arr[1]);
    } else {
        console.log(arr[0]);
    }
}
