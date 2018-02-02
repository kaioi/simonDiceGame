 
      const niveles =15

      let teclas=generarTeclas(niveles)

      function siguienteNivel(nivelActual){
        if(nivelActual==(niveles)){
          return swal({
            text:'Ganaste!',
            icon:'success'
          })
        }
      
        swal({
          timer:1000,
          text:`Nivel ${nivelActual+1}`,
         buttons:false
        })

        

        for(let i=0;i<=nivelActual;i++){
          setTimeout(()=>
            activate(teclas[i]),1000*(i+1)+1000)//sePrendenLasTeclasGrarquicamente
          
        }

        let i=0
        let teclaActual=teclas[i] //teclaActualTieneArray:{botonesPrendidosEnpantalla}
        window.addEventListener('keydown',onkeydown)//pendienteDeTeclasEnDom

        function onkeydown(ev){
          if(ev.keyCode==teclaActual){ //comparacionDeteclaPresionadaConElPrimerElementoDelArrayGeneradoAlAzar
            activate(teclaActual,{success:true})
            i++
            if(i>nivelActual){
              window.removeEventListener('keydown',onkeydown)
              setTimeout(()=>siguienteNivel(i),1500)

            }
            teclaActual=teclas[i]//seIteraLosElementosDeArrayDeSerMayorAlaSegundaRonda
          }else{
            activate(ev.keyCode,{fail:true})
            window.removeEventListener('keydown',onkeydown)
            swal({
              text:'perdiste',
            })
           // alert('perdiste')
          }
        }
      }

      siguienteNivel(0)

      function generarTeclas(niveles){
        return new Array(niveles).fill(0).map(generarTeclaAleatoria)//array de 15
      }

      function generarTeclaAleatoria(){
        const min=65
        const max=90
        return Math.round(Math.random()*(max-min)+min)
      }

      function getElementByKeyCode(keyCode){
     // return document.querySelector(`.key`) paraObtenerLasClases
     return document.querySelector(`[data-key="${keyCode}"]`)//se obtienes los atributos
   }

   function activate(keyCode,opts={}){
    const el=getElementByKeyCode(keyCode)//el=.key
    el.classList.add('active')//el=.key.active
    if (opts.success==true){
      el.classList.add('success')
    }else if(opts.fail){
      el.classList.add('fail')
    }

    setTimeout(()=>deactivate(el)

    ,500)
   }

   function deactivate(el){
    el.className='key'
   }