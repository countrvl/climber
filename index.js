
document.addEventListener('keydown', (k) => { 
    let climberPos = document.getElementById('climber').parentElement.id.slice(-1);
   
    if(k.key == 'z' || k.key == 'я'){
        if(climberPos !== '1') {
            document.getElementById('climber').remove();
            let newPos = document.createElement('div');
            newPos.id = 'climber';
            climberPos--;
            document.getElementById(`tochka${climberPos}`).appendChild(newPos);
            document.getElementById('climber').focus();
        };
    }

    if(k.key == 'x' || k.key == 'ч'){
        if(climberPos !== '6') {
            document.getElementById('climber').remove();
            let newPos = document.createElement('div');
            newPos.id = 'climber';
            climberPos++;
            document.getElementById(`tochka${climberPos}`).appendChild(newPos);
            document.getElementById('climber').focus();
        };
    }

    if(climberPos == '6'){
        let upFlag = document.createElement('div');
        upFlag.id = 'flag';
        document.getElementById(`tochka${climberPos}`).appendChild(upFlag);
    } else document.getElementById('flag').remove();
});
