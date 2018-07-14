//模拟一段JSON数据，实际要从数据库中读取  
  var per = [  
            {student_id:001,student_name:'陈灿',student_password:'chencan123',student_class:'15软件工程01班',student_college:'软信学院'},  
            {student_id:002,student_name:'狗蛋',student_password:'goudan123',student_class:'15软件工程01班',student_college:'软信学院'},
            {student_id:003,student_name:'娜美',student_password:'namei123',student_class:'15洗车专业',student_college:'洗车学院'},
            {student_id:004,student_name:'黄尚',student_password:'huangshang123',student_class:'15洗车专业',student_college:'洗车学院'},
            {student_id:005,student_name:'贡菊',student_password:'gongju456',student_class:'15洗车专业',student_college:'洗车学院'},
            {student_id:006,student_name:'姜军',student_password:'jiangjun789',student_class:'15洗车专业',student_college:'洗车学院'},
            {student_id:007,student_name:'芭比',student_password:'babi987',student_class:'19软件工程01班',student_college:'软信学院'},
            {student_id:008,student_name:'黄喉',student_password:'huanghou562',student_class:'19软件工程01班',student_college:'软信学院'},
            {student_id:009,student_name:'胎监',student_password:'taijian369',student_class:'19软件工程01班',student_college:'软信学院'},
            {student_id:010,student_name:'刘忙',student_password:'liumang698',student_class:'19软件工程01班',student_college:'软信学院'}
            ];   
    
  window.onload = function(){  //窗口加载事件
      var student_list = document.getElementById('student_list');  
        
      for(var i = 0;i < per.length; i++){ //遍历一下json数据  
          var trow = getDataRow(per[i]); //定义一个方法,返回tr数据  
          student_list.appendChild(trow);  
       }  
      }  
        
  function getDataRow(h){  
     var row = document.createElement('tr'); //创建行
     row.align="center";       
     var idCell = document.createElement('td'); //创建第一列id  
     idCell.innerHTML = h.student_id; //填充数据  
     row.appendChild(idCell); //加入行  ，下面类似  
       
     var nameCell = document.createElement('td');//创建第二列name  
     nameCell.innerHTML = h.student_name;  
     row.appendChild(nameCell); 
     nameCell.style.width="300px"
       
     var passwordCell=document.createElement('td')//创建第三列password  
     passwordCell.innerHTML=h.student_password;
     row.appendChild(passwordCell);
     
     var numCell = document.createElement('td');//创建第四列num  
     numCell.innerHTML = h.student_class;  
     row.appendChild(numCell);  
     
     var collegeCell=document.createElement('td');//创建第五列
     collegeCell.innerHTML=h.student_college;
     row.appendChild(collegeCell);
       
     //到这里，json中的数据已经添加到表格中，下面为每行末尾添加删除按钮  
       
     var delCell = document.createElement('td');//创建第列，操作列  
     row.appendChild(delCell);  
     var btnDel = document.createElement('input'); //创建一个input控件  
     btnDel.setAttribute('type','button'); //type="button"  
     btnDel.setAttribute('value','删除信息');  
     
     //javascript设置删除样式
     btnDel.onmouseover=function(){
     	btnDel.style.background="#003366"
     }
     btnDel.onmouseout=function(){
     	btnDel.style.background="#99CCCC"
     }
     btnDel.style.fontSize="18px";
     btnDel.style.fontWeight="20px";
     btnDel.style.outline="none";//定义轮廓
     btnDel.style.fontFamily="微软雅黑"; 
     btnDel.style.color="#ffffff";
     btnDel.style.background="#99CCCC";
     btnDel.style.border="0";
     btnDel.style.borderRadius="0.1EM";
     btnDel.style.cursor="pointer";
     btnDel.style.opacity="1";
       
     //删除操作  
     btnDel.onclick=function(){  
         if(confirm("确定删除这一行嘛？")){  
             //找到按钮所在行的节点，然后删掉这一行  
             this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);  
             //btnDel - td - tr - tbody - 删除(tr)  
             //刷新网页还原。实际操作中，还要删除数据库中数据，实现真正删除  
             }  
         }  
     delCell.appendChild(btnDel);  //把删除按钮加入td，别忘了  
     
     var updateCell = document.createElement('td');//创建第列，操作列  
     row.appendChild(updateCell);  
     var btnUpdate = document.createElement('input'); //创建一个input控件  
     btnUpdate.setAttribute('type','button'); //type="button"  
     btnUpdate.setAttribute('value','修改信息');   
     
     //javascript设置修改样式
     btnUpdate.onmouseover=function(){
     btnUpdate.style.background="#003366"
     }
     btnUpdate.onmouseout=function(){
     	btnUpdate.style.background="#99CCCC"
     }
     btnUpdate.style.fontSize="18px";
     btnUpdate.style.fontWeight="20px";
     btnUpdate.style.outline="none";//定义轮廓
     btnUpdate.style.fontFamily="微软雅黑"; 
     btnUpdate.style.color="#ffffff";
     btnUpdate.style.background="#99CCCC";
     btnUpdate.style.border="0";
     btnUpdate.style.borderRadius="0.1EM";
     btnUpdate.style.cursor="pointer";
     btnUpdate.style.opacity="1";
     
     //修改操作
     btnUpdate.onclick=function(){  
          showLayer('updateclass',600,450);
         }  
     updateCell.appendChild(btnUpdate);  //把删除按钮加入td，别忘了 
     
     return row; //返回tr数据      
     }  

//添加学生弹出框
function hideLayer(id) {
    var obj = document.getElementById(id);
    obj.style.display = "none";
    document.getElementById("mask").remove();
}

function showLayer(id, width, height) {
    var obj  = document.getElementById(id);
    var newMask = document.createElement("div");
    var winWidth = document.documentElement.clientWidth;
    var winHeight = document.documentElement.clientHeight;
    var offsetTop = document.documentElement.offsetTop;
    var left = (winWidth - width)/2;
    var top  = (winHeight - height)/2 + offsetTop;
    obj.style.top = top + "px";
    obj.style.left = left + "px";
    obj.style.display = "block";
  
        //mask div    
        newMask.id = "mask";
        newMask.style.position = "absolute";
        newMask.style.zIndex = "1";
        newMask.style.width = "100%";
        newMask.style.height = Math.max(document.body.scrollHeight,document.documentElement.scrollHeight) + 100 + "px";
        newMask.style.top = "0px";
        newMask.style.left = "0px";
        newMask.style.background = "blanchedalmond";
        newMask.style.opacity = "0.4";
        newMask.style.display = "block";
        document.body.appendChild(newMask);
    
}
