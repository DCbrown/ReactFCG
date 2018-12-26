import React, { Component } from 'react'

class List extends Component {
  render() {
    return (
      <div class="tabs is-boxed is-large tabs is-fullwidth">
        <ul>
          <li class="is-active">
            <a>
              <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
              <span>Accepted</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
              <span>In Progress</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
              <span>Finished</span>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}


export default List;