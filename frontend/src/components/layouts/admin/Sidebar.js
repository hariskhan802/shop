import React from 'react'

export const sidebar = () => {
    return (
        <div class="col-md-3 left_col cus-aside">
            <div class="left_col scroll-view">
                <div class="clearfix"></div>
                <div class="profile clearfix">
                    
                    <div class="profile_info">
                        <span>Welcome,</span>
                        <h2 class="user-name">Haris</h2>
                    </div>
                </div>
                <br />
                <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
                    <div class="menu_section">
                        <h3>General</h3>
                        <ul class="nav side-menu">
                            <li ui-sref-active="active"><a href=""><i class="fa fa-tachometer"></i>Dashboard</a></li>
                            
                            <li>
                                <a class="kv-toggle"><i class="fa fa-users"></i> Category <span class="fa fa-chevron-down"></span></a>
                                <ul class="nav child_menu">
                                    <li ui-sref-active="active"><a href="">Create Category</a></li>
                                    <li ui-sref-active="active" ><a href="">View Categories</a></li>
                                </ul>
                            </li>
                            <li>
                                <a class="kv-toggle"><i class="fa fa-users"></i> Post <span class="fa fa-chevron-down"></span></a>
                                <ul class="nav child_menu">
                                    <li ui-sref-active="active"><a href="">Create Post</a></li>
                                    <li ui-sref-active="active" ><a href="">View Posts</a></li>
                                </ul>
                            </li>
                            
                            <li ui-sref-active="active"><a href=""><i class="fa fa-user"></i> Profile </a></li>
                            
                            
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
