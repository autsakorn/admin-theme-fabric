import React, {Component} from 'react';
import { CommandButton } from 'office-ui-fabric-react/lib/Button';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import NavLeft from '../components/NavLeft';
import { Grid, Row, Col } from 'react-flexbox-grid';
import $ from 'jquery';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { isContextMenuShown: false, sidebar:"" };
    }
    headerIcon = (e) => {
        e.preventDefault();
        this.setState({sidebar:'with--sidebar'});
    }
    siteCache = (e) => {
        e.preventDefault();
        this.setState({sidebar:''});
    }

    render(){
        return (
            <div id="container" className={this.state.sidebar}>
                <div className="site-container">
                <div className="site-pusher">
                
                <header className="header">
                    
                    <a href="#" onClick={(e)=>this.headerIcon(e)} className="header__icon" id="header__icon"></a>
                    <a href="#" className="header__logo">Logo</a>
                    <nav className="menu">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact</a>
                    </nav>
                    
                </header>
            
                <div className="site-content">
                    <div className="container">
                    
                    <h1>Responsive Navigation Bar</h1>
                    
                    
                    <h2>Animals</h2>
                    <ul>
                        <li>Sabre-Toothed Tiger</li>
                        <li>Old English Sheepdog</li>
                        <li>Little Penguin</li>
                        <li>Striped Rocket Frog</li>
                        <li>Snapping Turtle</li>
                    </ul>
                    
                    
                    <p>Resize the browser window to toggle</p>
                    
                    <h2>Breakfast</h2>
                    <figure>
                        <a href="http://commons.wikimedia.org/wiki/File:Grilled_ham_and_cheese_014.JPG" target="_blank">
                        
                        </a>
                        
                    </figure>
                    <p>I make ham sandwiches in the morning with toasted bread and a cup of fresh milk every weekend.</p>
                    <p>Bacon ipsum dolor sit amet beef kielbasa pancetta sirloin, landjaeger sausage kevin hamburger frankfurter ham.Consequat laborum ham hock culpa pork filet mignon kevin, ribeye leberkas sed tri-tip corned beef ut dolore exercitation.</p>
                    <p>Ground round chicken cow, tongue porchetta sirloin salami kielbasa pork prosciutto venison pork chop capicola.</p>
                    
                    </div>
                </div>
                <div onClick={(e)=>this.siteCache(e)} className="site-cache" id="site-cache"></div>
                </div>
            </div>
          </div>
        );
    }
    // render(){
    //     return (
    //     <div>
    //         <CommandBar
    //             isSearchBoxVisible={ false }
    //             items={
    //                 [
    //                 {
    //                     key: 'new',
    //                     name: 'Add',
    //                     onRender: this._renderSplitButtonMenuItem,
    //                     className: 'ms-CommandBarItem',
    //                     subMenuProps: {
    //                     items: [
    //                         {
    //                             key: 'emailMessage',
    //                             name: 'Email message',
    //                             icon: 'Mail',
    //                             ['data-automation-id']: 'newEmailButton'
    //                         },
    //                         {
    //                             key: 'calendarEvent',
    //                             name: 'Calendar event',
    //                             icon: 'Calendar',
    //                             ['data-automation-id']: 'newCalendarButton'
    //                         }
    //                     ],
    //                     },
    //                 },
    //                 ]
    //             }
    //         />
    //         <div className="ms-Grid">
    //             <div className="ms-Grid-row">
    //                 <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2"><NavLeft /></div>
    //                 <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg10"><i className="ms-Icon ms-Icon--Mail" aria-hidden="true"></i>{this.props.children}</div>
    //             </div>
    //         </div>
    //     </div>
    //     );
    // }
}