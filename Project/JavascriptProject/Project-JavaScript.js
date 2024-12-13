// Inseart Oprator
let userdata = []

const saveData = ()=>{
    let alldata = JSON.parse(localStorage.getItem("userdata"))
    let len = alldata!=null ? alldata.length+1 : 1
    let name = document.getElementById("name").value 
    // let age = document.forms.age.value
    let email = $("#email").val()
    let age = $("#age").val()
    let id = $("#id").val()
    let gender = $("input[type = 'radio']:checked").val()
    if(id == ''){
        let obj = {
            id:len,
            name:name,
            email:email,
            age:age,
            gender:gender
        }
        // console.log(obj);
        userdata.push(obj)
    }
    else{
        //update
        let updatedData = alldata.map((i)=>{
            if(i.id == id){
                i.name = name
                i.age = age
                i.gender = gender
                i.email=email
            }
            return i
        })
        userdata = updatedData
    }
    
    localStorage.setItem("userdata",JSON.stringify(userdata))
    document.frm.reset() 
    $("#gender1").removeAttr("checked")
    $("#gender2").removeAttr("checked")
    disp()
}

//Display
const disp = ()=>{
    let alldata = JSON.parse(localStorage.getItem("userdata"))
    console.log(alldata)
    let txt = ''
    alldata.map((i)=>{
        txt +=`
            <tr>
                <td>${i.id}</td>
                <td>${i.name}</td>
                <td>${i.email}</td>
                <td>${i.age}</td>
                <td>${i.gender}</td>
                <td>
                    <button onclick="delDeta(${i.id})">Delete</button>
                    <button onclick="editDeta(${i.id})">Edit</button>
                </td>    
            </tr>`
    })
    $("#alldata").html(txt)
}

//Delete
const delDeta = (id)=>{
    let alldata = JSON.parse(localStorage.getItem("userdata"))
    let res = alldata.filter((i)=>{
        return i.id != id
    })
    let j = 1
    let finaldata = res.map((i)=>{
        i.id = j++
        return i
    })
    localStorage.setItem("userdata",JSON.stringify(finaldata))
    disp()
}

//edit
const editDeta = (id)=>{
    $("#gender1").removeAttr("checked")
    $("#gender2").removeAttr("checked")

    let alldata = JSON.parse(localStorage.getItem("userdata"))

    let res = alldata.find((i)=>{
        return i.id == id
    })
    $("#name").val(res.name)
    $("#email").val(res.email)
    $("#age").val(res.age)
    $("#id").val(res.id)
    let gender = res.gender
    if(gender == "Male"){
        $("#gender1").attr("checked","true")
    }else{
        $("#gender2").attr("checked","true")
    }
    
    // let a = $("input[type = 'radio]").attr("checked")
    // localStorage.setItem("userdata",JSON.stringify(finaldata))
    disp()
}
disp()