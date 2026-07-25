var task = [];
var taskStatus = [];

function addTask()
{
    var input = document.getElementById("task").value;

    if(input == "")
    {
        document.getElementById("message").innerHTML = "Please enter a task.";
        return;
    }

    document.getElementById("message").innerHTML = "";

    task.push(input);
    taskStatus.push(0);

    document.getElementById("task").value = "";

    displayTask();
}

function displayTask()
{
    var data = "";

    if(task.length == 0)
    {
        data = "<li>No Tasks Available</li>";
    }

    for(var i = 0; i < task.length; i++)
    {
        data += "<li>";

        if(taskStatus[i] == 1)
        {
            data += "<span style='text-decoration:line-through; color:gray;'>";
            data += task[i];
            data += "</span>";
        }
        else
        {
            data += task[i];
        }

        data += " <button onclick='completeTask(" + i + ")'>Complete</button>";

        data += " <button onclick='deleteTask(" + i + ")'>Delete</button>";

        data += "</li>";
    }

    document.getElementById("list").innerHTML = data;

    countTask();
}

function completeTask(i)
{
    taskStatus[i] = 1;

    displayTask();
}

function deleteTask(i)
{
    task.splice(i,1);
    taskStatus.splice(i,1);

    displayTask();
}

function countTask()
{
    var total = task.length;
    var completed = 0;

    for(var i = 0; i < taskStatus.length; i++)
    {
        if(taskStatus[i] == 1)
        {
            completed++;
        }
    }

    var pending = total - completed;

    document.getElementById("total").innerHTML = total;
    document.getElementById("completed").innerHTML = completed;
    document.getElementById("pending").innerHTML = pending;
}

function enterTask(event)
{
    if(event.key == "Enter")
    {
        addTask();
    }
}