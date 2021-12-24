import React from 'react'

const topbar = () => {
    return (
        <div class="top_nav">
            <div class="nav_menu">
                <nav>
                    <ul class="nav navbar-nav navbar-right">
                        <li class="">
                            <a href="javascript:;" class="user-profile user-name dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                            Haris
                            <span class=" fa fa-angle-down"></span>
                            </a>
                            <ul class="dropdown-menu dropdown-usermenu pull-right">
                                <li><a href=""> Profile</a></li>
                                <li><a href="" ><i class="fa fa-sign-out pull-right"></i> Log Out</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default topbar

