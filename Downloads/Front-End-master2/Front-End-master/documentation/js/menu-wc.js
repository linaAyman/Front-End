'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">mayestro documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccountMayestroModule.html" data-type="entity-link">AccountMayestroModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccountMayestroModule-424c479975491880b4e2addbb811f92e"' : 'data-target="#xs-components-links-module-AccountMayestroModule-424c479975491880b4e2addbb811f92e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccountMayestroModule-424c479975491880b4e2addbb811f92e"' :
                                            'id="xs-components-links-module-AccountMayestroModule-424c479975491880b4e2addbb811f92e"' }>
                                            <li class="link">
                                                <a href="components/AccountMayestroComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountMayestroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChangePasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChangePasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForgetPasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForgetPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResetPasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResetPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SigninComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SigninComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccountMayestroRoutingModule.html" data-type="entity-link">AccountMayestroRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-15bcf3f85baafba1f88744704bd2da11"' : 'data-target="#xs-components-links-module-AppModule-15bcf3f85baafba1f88744704bd2da11"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-15bcf3f85baafba1f88744704bd2da11"' :
                                            'id="xs-components-links-module-AppModule-15bcf3f85baafba1f88744704bd2da11"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ArtistModule.html" data-type="entity-link">ArtistModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ArtistModule-2f39648b35bbe71936342d64678f7fee"' : 'data-target="#xs-components-links-module-ArtistModule-2f39648b35bbe71936342d64678f7fee"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ArtistModule-2f39648b35bbe71936342d64678f7fee"' :
                                            'id="xs-components-links-module-ArtistModule-2f39648b35bbe71936342d64678f7fee"' }>
                                            <li class="link">
                                                <a href="components/AboutArtistComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutArtistComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArtistCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArtistCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArtistComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArtistComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArtistHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArtistHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArtistOverviewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArtistOverviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArtistSongComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArtistSongComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RelatedArtistsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RelatedArtistsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ArtistRoutingModule.html" data-type="entity-link">ArtistRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MayestroModule.html" data-type="entity-link">MayestroModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MayestroModule-9150b64f9d174b376aa0f4f76f854c91"' : 'data-target="#xs-components-links-module-MayestroModule-9150b64f9d174b376aa0f4f76f854c91"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MayestroModule-9150b64f9d174b376aa0f4f76f854c91"' :
                                            'id="xs-components-links-module-MayestroModule-9150b64f9d174b376aa0f4f76f854c91"' }>
                                            <li class="link">
                                                <a href="components/AlbumsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AlbumsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArtistsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArtistsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MayestroComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MayestroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MiniCardViewerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MiniCardViewerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlayerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PlayerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlaylistComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PlaylistComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlaylistsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PlaylistsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SeeAllComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SeeAllComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SideBarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SideBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MayestroRoutingModule.html" data-type="entity-link">MayestroRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OpenMayestroModule.html" data-type="entity-link">OpenMayestroModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OpenMayestroModule-f36fc472455d1048696e5f8ea58bcb97"' : 'data-target="#xs-components-links-module-OpenMayestroModule-f36fc472455d1048696e5f8ea58bcb97"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OpenMayestroModule-f36fc472455d1048696e5f8ea58bcb97"' :
                                            'id="xs-components-links-module-OpenMayestroModule-f36fc472455d1048696e5f8ea58bcb97"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotificationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotificationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OpenMayestroComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OpenMayestroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OverviewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OverviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SetDevicePasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SetDevicePasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TrackComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TrackComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-OpenMayestroModule-f36fc472455d1048696e5f8ea58bcb97"' : 'data-target="#xs-injectables-links-module-OpenMayestroModule-f36fc472455d1048696e5f8ea58bcb97"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OpenMayestroModule-f36fc472455d1048696e5f8ea58bcb97"' :
                                        'id="xs-injectables-links-module-OpenMayestroModule-f36fc472455d1048696e5f8ea58bcb97"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OpenMayestroRoutingModule.html" data-type="entity-link">OpenMayestroRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-f3ba8ea78641138497706456e6d07e94"' : 'data-target="#xs-components-links-module-SharedModule-f3ba8ea78641138497706456e6d07e94"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-f3ba8ea78641138497706456e6d07e94"' :
                                            'id="xs-components-links-module-SharedModule-f3ba8ea78641138497706456e6d07e94"' }>
                                            <li class="link">
                                                <a href="components/HomeArtistCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeArtistCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ChangePasswordComponent-1.html" data-type="entity-link">ChangePasswordComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent-1.html" data-type="entity-link">HeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent-2.html" data-type="entity-link">HeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SongComponent.html" data-type="entity-link">SongComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SongComponent-1.html" data-type="entity-link">SongComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TrackComponent-1.html" data-type="entity-link">TrackComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/ICard.html" data-type="entity-link">ICard</a>
                            </li>
                            <li class="link">
                                <a href="classes/ICategory.html" data-type="entity-link">ICategory</a>
                            </li>
                            <li class="link">
                                <a href="classes/IPlaylist.html" data-type="entity-link">IPlaylist</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AccountMayestroService.html" data-type="entity-link">AccountMayestroService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AssetsService.html" data-type="entity-link">AssetsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MayestroService.html" data-type="entity-link">MayestroService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MaystroService.html" data-type="entity-link">MaystroService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlayerService.html" data-type="entity-link">PlayerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/MockServerService.html" data-type="entity-link">MockServerService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Iartist.html" data-type="entity-link">Iartist</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});