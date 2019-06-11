$(document).ready(function(){

                $("#cientifica").click(function(){
                    alert("Se añadirá en la siguiente actualización");
                });

                $("#icono_menu").click(function(){
                    $("#icono_menu").hide();
                    $("#salir_menu").show();
                    $("#menu").animate({
                        marginLeft:"-4%"
                    },400);
                });

                $("#informacion_texto").click(function(){
                    $("#informacion").animate({
                        marginLeft:"-4%"
                    },400);
                });
                
                $("#salir_menu").click(function(){
                    $("#icono_menu").show();
                    $("#salir_menu").hide();
                    $(".modos_personalizacion").hide();
                    $("#menu").animate({
                        marginLeft:"-98%"
                    },400);
                    $("#informacion").animate({
                        marginLeft:"-98%"
                    },400);
                });

                $("#personalizar").click(function(){
                    $(".modos_personalizacion").show();
                });

                 /*$("#personalizar").mouseout(function(){
                    $(".modos_personalizacion").hide();
                });*/

                 $("#compartir").mouseover(function(){
                    $("#contenedor_compartir").animate({
                        marginTop:"110%"
                    },600);
                });

                $("#compartir").mouseout(function(){
                    $("#contenedor_compartir").animate({
                        marginTop:"170%"
                    },600);
                });

                //Guardado de todos los elementos en variables
                var cero=$("#cero");
                var uno=$("#uno");
                var dos=$("#dos");
                var tres=$("#tres");
                var cuatro=$("#cuatro");
                var cinco=$("#cinco");
                var seis=$("#seis");
                var siete=$("#siete");
                var ocho=$("#ocho");
                var nueve=$("#nueve");
                var consola=document.getElementById("consola");
                var c=$("#c");
                var igual=$("#igual");
                var mas=$("#mas");
                var menos=$("#menos");
                var por=$("#por");
                var entre=$("#entre");
                var porcentaje=$("#porcentaje");
                var operando_a=0;
                var operando_b=0;
                var operacion=" ";

                //Mostrar numeros en consola
                function limpiar(){
                    consola.textContent = "";
                }
                
                function resetear(){
                    consola.textContent = "";
                    operandoa = 0;
                    operandob = 0;
                    operacion = "";
                }
                c.click(function(){
                    limpiar();
                });

                mas.click(function(){
                    consola.textContent=consola.textContent+"+";
                });
                menos.click(function(){
                    consola.textContent=consola.textContent+"-";
                });
                por.click(function(){
                    consola.textContent=consola.textContent+"X";
                });
                entre.click(function(){
                    consola.textContent=consola.textContent+"/";
                });
                porcentaje.click(function(){
                    consola.textContent=consola.textContent+"%";
                });
                cero.click(function(){
                    consola.textContent = consola.textContent + "0"; //textContent = resultado.textContent  + "1";
                });
                uno.click(function(){
                    consola.textContent=consola.textContent+"1";
                });
                dos.click(function(){
                    consola.textContent=consola.textContent+"2";
                });
                tres.click(function(){
                    consola.textContent=consola.textContent+"3";
                });
                cuatro.click(function(){
                    consola.textContent=consola.textContent+"4";
                });
                cinco.click(function(){
                    consola.textContent=consola.textContent+"5";
                });
                seis.click(function(){
                    consola.textContent=consola.textContent+"6";
                });
                siete.click(function(){
                    consola.textContent=consola.textContent+"7";
                });
                ocho.click(function(){
                    consola.textContent=consola.textContent+"8";
                });
                nueve.click(function(){
                    consola.textContent=consola.textContent+"9";
                });
                mas.click(function(){
                    operandoa=consola.textContent;
                    operacion="+";
                    limpiar();
                });
                menos.click(function(){
                    operandoa=consola.textContent;
                    operacion="-";
                    limpiar();
                });
                por.click(function(){
                    operandoa=consola.textContent;
                    operacion="X";
                    limpiar();
                });
                entre.click(function(){
                    operandoa=consola.textContent;
                    operacion="/";
                    limpiar();
                });
                porcentaje.click(function(){
                    operandoa=consola.textContent;
                    operacion="%";
                    limpiar();
                });
                igual.click(function(){
                    operandob=consola.textContent;
                    resolver();
                });
               
               function resolver(){
                    var resultado=0;
                    switch(operacion){
                        case "+":
                        resultado=parseFloat(operandoa)+parseFloat(operandob);
                        break;
                        case "-":
                        resultado=parseFloat(operandoa)-parseFloat(operandob);
                            break;
                        case "X":
                        resultado=parseFloat(operandoa)*parseFloat(operandob);
                        break;
                        case "/":
                        resultado=parseFloat(operandoa)/parseFloat(operandob);
                        break;
                        case "%":
                        resultado=parseFloat(((operandoa)*(operandob))/100);
                    }
                    resetear();
                    consola.textContent=resultado;
                    }              


            });