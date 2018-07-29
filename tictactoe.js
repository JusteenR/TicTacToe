var j = 0;
let on = 0;
class Player {
  constructor(){
    this.score = 0;
    this.spots = [false, false, false, false, false, false, false, false, false];
  }
}

class Game {
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.turns = 0;

    this.player1 = new Player();
    this.player2 = new Player();

    this.drawBoard();
    this.startGame();
  }

  drawBoard(){
    this.canvas = document.getElementById("outer");
    this.ctx = document.getElementById("outer").getContext("2d");
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
    this.ctx.fillRect(0,0, this.canvas.width, this.canvas.height);

    this.ctx.beginPath();
    this.ctx.lineWidth="3";
    this.ctx.strokeStyle="white";
    this.ctx.moveTo(0,this.canvas.height/3);
    this.ctx.lineTo(this.canvas.width,this.canvas.height/3);
    this.ctx.stroke();

    this.ctx.moveTo(0,2*this.canvas.height/3);
    this.ctx.lineTo(this.canvas.width,2*this.canvas.height/3);
    this.ctx.stroke();

    this.ctx.moveTo(this.canvas.width/3,0);
    this.ctx.lineTo(this.canvas.width/3,this.canvas.height);
    this.ctx.stroke();

    this.ctx.moveTo(2*this.canvas.width/3,0);
    this.ctx.lineTo(2*this.canvas.width/3,this.canvas.height);
    this.ctx.stroke();
  }

  reset(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.strokeStyle="white";
    this.drawBoard();
    for (let x = 0; x < 9; x++){
      this.player1.spots[x] = false;
      this.player2.spots[x] = false;
    }
    // Switches which player goes first in the next round
    if (this.turns % 2 === 0){
      document.getElementById("status").innerHTML = "Player 1's Turn";
    } else {
      document.getElementById("status").innerHTML = "Player 2's Turn";
    }
    on = 0;
  }

  startGame(){
    var pos;
    this.canvas.addEventListener("click", e => {
      if (on === 0){
        this.playGame(e);
      }

    });

  }

  playGame(e){
    let pos;
    pos = this.position(e);

    if (!this.valid(pos - 1)){ return; }
    if (this.turns % 2 === 0){
      this.p1Draw(pos);
      this.player1.spots[pos - 1] = true;
      document.getElementById("status").innerHTML = "Player 2's Turn";
    } else {
      this.p2Draw(pos);
      this.player2.spots[pos - 1] = true;
      document.getElementById("status").innerHTML = "Player 1's Turn";
    }
    if (this.check(this.player1, 1) === true || this.check(this.player2, 2) === true){
      on = 1;
    };
    this.turns++;
  }

  check(p, n){
    if (p.spots[0] === true){
      if (p.spots[1] === true){
        if (p.spots[2] === true){
          p.score++;
          document.getElementById("player" + n).innerHTML = "Player"+ n + " Score: " + p.score;
          document.getElementById("status").innerHTML = "Player "+ n + " Wins!";
          this.ctx.strokeStyle="red";
          if (n === 1){
            this.p1Draw(1);
            this.p1Draw(2);
            this.p1Draw(3);
          }
          else if (n === 2){
            this.p2Draw(1);
            this.p2Draw(2);
            this.p2Draw(3);
          }
          return true;
        }
      } else if (p.spots[3]){
        if (p.spots[6]){
          p.score++;
          document.getElementById("player" + n).innerHTML = "Player"+ n + " Score: " + p.score;
          document.getElementById("status").innerHTML = "Player "+ n + " Wins!";
          this.ctx.strokeStyle="red";
          if (n === 1){
            this.p1Draw(1);
            this.p1Draw(4);
            this.p1Draw(7);
          }
          else if (n === 2){
            this.p2Draw(1);
            this.p2Draw(4);
            this.p2Draw(7);
          }
          return true;
        }
      } else if (p.spots[4]){
        if (p.spots[8]){
          p.score++;
          document.getElementById("player" + n).innerHTML = "Player"+ n + " Score: " + p.score;
          document.getElementById("status").innerHTML = "Player "+ n + " Wins!";
          this.ctx.strokeStyle="red";
          if (n === 1){
            this.p1Draw(1);
            this.p1Draw(5);
            this.p1Draw(9);
          }
          else if (n === 2){
            this.p2Draw(1);
            this.p2Draw(5);
            this.p2Draw(9);
          }
          return true;
        }
      }
    }

    if (p.spots[6] === true){
      if (p.spots[4] === true){
        if (p.spots[2] === true){
          p.score++;
          document.getElementById("player" + n).innerHTML = "Player"+ n + " Score: " + p.score;
          document.getElementById("status").innerHTML = "Player "+ n + " Wins!";
          this.ctx.strokeStyle="red";
          if (n === 1){
            this.p1Draw(3);
            this.p1Draw(5);
            this.p1Draw(7);
          }
          else if (n === 2){
            this.p2Draw(3);
            this.p2Draw(5);
            this.p2Draw(7);
          }
          return true;
        }
      } else if (p.spots[7]){
        if (p.spots[8]){
          p.score++;
          document.getElementById("player" + n).innerHTML = "Player"+ n + " Score: " + p.score;
          document.getElementById("status").innerHTML = "Player "+ n + " Wins!";
          this.ctx.strokeStyle="red";
          if (n === 1){
            this.p1Draw(7);
            this.p1Draw(8);
            this.p1Draw(9);
          }
          else if (n === 2){
            this.p2Draw(7);
            this.p2Draw(8);
            this.p2Draw(9);
          }
          return true;
        }
      }
      }
      if (p.spots[3]){
        if (p.spots[4]){
          if (p.spots[5]){
            p.score++;
            document.getElementById("player" + n).innerHTML = "Player"+ n + " Score: " + p.score;
            document.getElementById("status").innerHTML = "Player "+ n + " Wins!";
            this.ctx.strokeStyle="red";
            if (n === 1){
              this.p1Draw(4);
              this.p1Draw(5);
              this.p1Draw(6);
            }
            else if (n === 2){
              this.p2Draw(4);
              this.p2Draw(5);
              this.p2Draw(6);
            }
            return true;
          }
        }
      }
      if (p.spots[1]){
        if (p.spots[4]){
          if (p.spots[7]){
            p.score++;
            document.getElementById("player" + n).innerHTML = "Player"+ n + " Score: " + p.score;
            document.getElementById("status").innerHTML = "Player "+ n + " Wins!";
            this.ctx.strokeStyle="red";
            if (n === 1){
              this.p1Draw(2);
              this.p1Draw(5);
              this.p1Draw(8);
            }
            else if (n === 2){
              this.p2Draw(2);
              this.p2Draw(5);
              this.p2Draw(8);
            }
            return true;
          }
        }
      }

      if (p.spots[2]){
        if (p.spots[5]){
          if (p.spots[8]){
            p.score++;
            document.getElementById("player" + n).innerHTML = "Player"+ n + " Score: " + p.score;
            document.getElementById("status").innerHTML = "Player "+ n + " Wins!";
            this.ctx.strokeStyle="red";
            if (n === 1){
              this.p1Draw(3);
              this.p1Draw(6);
              this.p1Draw(9);
            }
            else if (n === 2){
              this.p2Draw(3);
              this.p2Draw(6);
              this.p2Draw(9);
            }
            return true;
          }
        }
      }
      return false;
  }

  p1Draw(n){
    switch(n){
      case 1:
        this.drawX(100, 100);
        break;
      case 2:
        this.drawX(300, 100);
        break;
      case 3:
        this.drawX(500, 100);
        break;
      case 4:
        this.drawX(100, 300);
        break;
      case 5:
        this.drawX(300, 300);
        break;
      case 6:
        this.drawX(500, 300);
        break;
      case 7:
        this.drawX(100, 500);
        break;
      case 8:
        this.drawX(300, 500);
        break;
      case 9:
        this.drawX(500, 500);
        break;
    }
  }

  p2Draw(n){
    switch(n){
      case 1:
        this.drawO(100, 100);
        break;
      case 2:
        this.drawO(300, 100);
        break;
      case 3:
        this.drawO(500, 100);
        break;
      case 4:
        this.drawO(100, 300);
        break;
      case 5:
        this.drawO(300, 300);
        break;
      case 6:
        this.drawO(500, 300);
        break;
      case 7:
        this.drawO(100, 500);
        break;
      case 8:
        this.drawO(300, 500);
        break;
      case 9:
        this.drawO(500, 500);
        break;
    }
  }

  valid(n){
    if (this.player1.spots[n] === false && this.player2.spots[n] === false){
      return true;
    }
    else {
      return false;
    }
  }

  position(e){
    let viewPortOffset = this.canvas.getBoundingClientRect();
    let boxWidth = this.canvas.getBoundingClientRect().width/3;
    let boxHeight = this.canvas.getBoundingClientRect().height/3;
    let left = this.canvas.getBoundingClientRect().left;
    let top = this.canvas.getBoundingClientRect().top;

    // First Column
    if ((e.pageX - left) > 3 && (e.pageX - left) < boxWidth){
      if ((e.pageY - top) > 0 && (e.pageY - top) < boxHeight - 3){
        return 1;
      }
      if ((e.pageY - top) > boxHeight && (e.pageY - top) < 2 * boxHeight - 3){
        return 4;
      }
      if ((e.pageY - top) > 2 * (boxHeight) + 3 && (e.pageY - top) < 3 * boxHeight - 3){
        return 7;
      }
    }

    //Second column
    if ((e.pageX - left) > boxWidth + 3 && (e.pageX - left) < 2 * boxWidth){
      if ((e.pageY - top) > 0 && (e.pageY - top) < boxHeight - 3){
        return 2;
      }
      if ((e.pageY - top) > boxHeight && (e.pageY - top) < 2 * boxHeight - 3){
        return 5;
      }
      if ((e.pageY - top) > 2 * (boxHeight) + 3 && (e.pageY - top) < 3 * boxHeight - 3){
        return 8;
      }
    }

    //Third column
    if ((e.pageX - left) > 2 * boxWidth + 3 && (e.pageX - left) < 3 * boxWidth){
      if ((e.pageY - top) > 0 && (e.pageY - top) < boxHeight - 3){
        return 3;
      }
      if ((e.pageY - top) > boxHeight && (e.pageY - top) < 2 * boxHeight - 3){
        return 6;
      }
      if ((e.pageY - top) > 2 * (boxHeight) + 3 && (e.pageY - top) < 3 * boxHeight - 3){
        return 9;
      }
    }
  }

  drawX(x, y){

    this.ctx.beginPath();

    this.ctx.moveTo(x - 60, y - 60);
    this.ctx.lineTo(x + 60, y + 60);

    this.ctx.moveTo(x + 60, y - 60);
    this.ctx.lineTo(x - 60, y + 60);
    this.ctx.stroke();
  }

  drawO(x, y){
    this.ctx.beginPath();
    this.ctx.arc(x, y, 60, 0, 2 * Math.PI);
    this.ctx.stroke();
  }
}

const canvas = document.getElementById('outer');
const tic = new Game(canvas);
