function task1(callback) {
  setTimeout(() => {
    console.log("task1 completet");
    // task 2 function is called here
    callback();
  }, 2000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("task2 completet");
    // task 3
    callback();
  }, 2000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("task 3 completet");
    // no task just a function called and inside that function a console.log statement will run.
    callback();
  }, 2000);
}

task1(() => {
  task2(() => {
    task3(() => {
      console.log("All task completed");
    });
  });
});
