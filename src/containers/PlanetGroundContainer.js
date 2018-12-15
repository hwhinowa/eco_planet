import React, { Component } from 'react';

import 'css/PlanetGround.css';

class PlanetGroundContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            data : this.props.data
        }
    }

    render(){
        let data = this.state.data;
        
        return(
            <div className={`groundContainer ground`+(data.id+1)}>
                <div className='groundBack'>
                    <div className='ocean_shallow'></div>
                    <div className='ocean_middle'></div>
                    <div className='ocean_deep'></div>
                </div>
                <svg viewBox='0 0 600 600'>
                    {/* {(data.id === 1) && */}
                        <path d='M102 227 V 217 C 95 211, 45 198, 102 191 Q 108 177, 102 165 Q 96 153, 102 144 Q 115 125, 125 104 Q 152 93, 153 65 T 176 41 Q 179 40, 180 35 Q 189 24, 201 32 L 214 32 L 228 17 H 253 Q 256 20, 260 16 Q 263 13, 266 16 Q 268 18, 273 15 Q 278 6, 283 14 Q 284 20, 289 16 Q 292 15, 290 22 Q 288 25, 291 29 Q 295 33, 297 37 Q 289 49, 304 52 Q 316 51, 327 62 L 349 69 V 60 Q 363 40, 377 58 H 386 Q 405 68, 426 60 Q 441 66, 444 60 Q 445 56, 447 60 Q 458 76, 446 95 L 454 125 Q 467 132, 466 148 Q 462 159, 472 163 Q 483 170, 486 185 Q 499 189, 505 203 H 509 Q 523 217, 542 208 Q 559 201, 514 287 Q 474 337, 490 367 Q 509 409, 474 430 Q 447 450, 457 462 Q 465 482, 450 485 Q 439 494, 443 508 Q 414 562, 378 564 Q 350 588, 332 552 Q 336 540, 316 510 Q 279 428, 296 400 Q 308 371, 292 346 Q 264 306, 282 286 L 275 277 Q 259 281, 242 265 Q 234 267, 228 264 Q 200 275, 193 272 Q 186 268, 179 271 Q 144 279, 132 261 Q 121 258, 121 249 Q 120 237, 102 227' stroke='#fff' />
                    {/* } */}

                    {(data.id === 2) &&
                        <path d='M306 315 Q 303 319, 298 318 Q 267 313, 252 336 Q 210 353, 204 344 Q 197 334, 180 340 Q 163 345, 162 339 Q 160 331, 150 341 Q 129 328, 94 363 L 54 396 Q 59 379, 46 389 L 37 372 L 80 349 L 80 316 Q 92 304, 84 300 Q 75 297, 75 292 Q 72 284, 59 287 L 18 271 L 7 235 Q 31 222, 29 213 L 38 208 L 56 219 L 72 217 Q 104 226, 120 207 Q 136 205, 170 178 L 204 190 L 249 183 L 261 198 Q 291 197, 318 188 L 324 194 L 332 194 L 354 183 Q 373 189, 379 182 L 383 178 Q 386 180, 390 177 Q 429 147, 443 158 Q 565 238, 559 244 Q 577 309, 582 365 Q 581 379, 592 385 Q 596 388, 584 386 Q 584 405, 571 402 Q 561 398, 557 406 Q 552 417, 543 412 Q 542 415, 538 414 Q 539 417, 543 417 Q 546 415, 546 419 L 547 426 Q 541 431, 538 429 Q 531 426, 528 430 Q 525 435, 508 420 Q 485 402, 460 416 Q 405 431, 383 398 Q 359 387, 356 367 Q 298 325, 306 315' stroke='#fff'/>
                    }

                    {(data.id === 3) &&
                        <path d='M244 559 L 233 547 Q 215 553, 213 544 Q 209 537, 194 540 Q 143 506, 151 492 Q 165 474, 158 471 Q 155 459, 170 456 Q 178 430, 206 413 Q 189 390, 204 371 Q 223 347, 217 327 Q 214 301, 225 296 Q 236 291, 227 283 Q 218 277, 236 256 Q 265 237, 231 224 Q 214 196, 218 168 Q 236 145, 214 147 Q 200 149, 199 124 Q 203 100, 182 81 Q 153 71, 177 50 Q 192 24, 215 35 Q 242 35, 246 70 L 256 78 Q 274 68, 277 87 Q 301 118, 357 100 L 426 158 L 407 183 L 441 225 Q 439 260, 416 241 Q 407 267, 375 259 Q 362 257, 366 275 Q 371 288, 367 309 Q 399 339, 381 351 Q 361 355, 359 377 Q 375 383, 366 390 Q 361 396, 373 407 L 370 411 Q 402 432, 381 438 Q 375 448, 381 463 Q 491 495, 378 538 Q 390 554, 384 562 L 376 558 Q 357 572,  356 564 Q 332 571, 283 557 Q 265 562, 261 549 Z' stroke='#fff' />
                    }

                    {/* <rect x='0' y='0' width='600' height='600' stroke='white' fill='transparent' strokeWidth='1'/> */}
                    {/* <path d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="#fff" fill="transparent"/> */}
                    {/* <circle cx='50' cy='10' r='2' fill='#fff'/>
                    <circle cx='95' cy='80' r='2' fill='#fff'/>
                    <circle cx='180' cy='80' r='2' fill='#fff'/>
                    <path d="M10 80 Q 52.5 10, 95 80 T 180 80" stroke="white" fill="transparent"/> */}

                    {/* <path d='M292 120 H 692 C 704 120, 704 104, 715 104 H 782' stroke='#1c3b36' strokeDasharray='500 500' strokeDashoffset='500' strokeWidth='1' fill='none' /> */}

                    {/* <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/> */}
                    {/* <circle cx='600' cy='300' r=''/> */}

                    {/* <circle cx='918' cy='155' r='54' stroke='#407668' strokeWidth='1' strokeDasharray='120 50' strokeDashoffset='120' fill='none' /> */}
                </svg>
                
                <div className='groundBack'>
                    <div className='ocean_deep'></div>
                    <div className='ocean_middle'></div>
                    <div className='ocean_shallow'></div>
                </div>
            </div>
        )
    }

}

export default PlanetGroundContainer;