(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t),a.d(t,"store",(function(){return Ve}));var r=a(0),n=a.n(r),c=a(27),o=a.n(c),i=a(12),l=a(71),s=a(149),u=a(150),m=a(26),b=a(72),d=a(3),E=a(73),p=a(9),f=a(23),v=a(17);function g(e){return{type:"SET_PAGE",page:e}}function O(e){return{type:"REQUEST_ERROR",fetchingError:e}}function h(e){return{type:"SET_LOADING",isLoading:e}}function j(e){return{type:"REMOVE_FROM_FAVOURITES",movieId:e}}var x={searchTerm:"",currentPage:1,searchResults:[],allSearchResults:null,favouriteMovies:{},detailsOfMovies:{},fetchingError:"",isLoading:!1};var I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_MOVIES":return Object(v.a)({},e,{searchResults:Object(f.a)(t.movies.Search),allSearchResults:t.movies.totalResults,fetchingError:"",currentPage:1});case"RECEIVE_ADDITIONAL_MOVIES":return Object(v.a)({},e,{searchResults:[].concat(Object(f.a)(e.searchResults),Object(f.a)(t.additionalMovies.Search)),fetchingError:"",currentPage:e.currentPage++});case"RECEIVE_MOVIE_DETAIL":return Object(v.a)({},e,{detailsOfMovies:Object(v.a)({},e.movieDetails,Object(p.a)({},t.movie.imdbID,Object(v.a)({},t.movie))),fetchingError:""});case"REQUEST_ERROR":return Object(v.a)({},e,{fetchingError:"An error occurred: ".concat(t.fetchingError),searchTerm:"",currentPage:1,searchResults:[]});case"SET_LOADING":return Object(v.a)({},e,{isLoading:!1});case"SET_SEARCH_TERM":return Object(v.a)({},e,{searchTerm:t.searchTerm});case"SET_PAGE":return Object(v.a)({},e,{currentPage:t.page});case"ADD_TO_FAVOURITES":return Object(v.a)({},e,{favouriteMovies:Object(v.a)({},e.favouriteMovies,Object(p.a)({},t.movie.imdbID,Object(v.a)({},t.movie)))});case"REMOVE_FROM_FAVOURITES":var a=e.favouriteMovies,r=t.movieId,n=(a[r],Object(d.a)(a,[r].map(E.a)));return Object(v.a)({},e,{favouriteMovies:n});default:return e}},R=Object(m.c)({movies:I}),y=a(30),w=a(28),T=a(135),M=a(65),k=a.n(M),D=a(144),S=a(74),_=a(151),A=a(143),N=a(68),V=a.n(N),L=a(141),C=a(137),B=a(138),P=a(142),F=a(140),U=a(139),Q=a(43),W=a.n(Q),G=Object(T.a)((function(e){var t;return{root:(t={width:240},Object(p.a)(t,e.breakpoints.up("sm"),{width:300}),Object(p.a)(t,"& button",{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch"}),Object(p.a)(t,"& a",{textDecoration:"none","& button":{color:e.colors.blue}}),t),cardFooter:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"},cardActions:{display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"flex-end","& svg":{color:e.colors.blue}}}}));var H=function(e){var t=e.title,a=e.image,r=e.id,c=e.favouriteMovieDetail,o=G(),l=Object(i.b)(),s=Object(w.e)();return n.a.createElement(C.a,{className:o.root},n.a.createElement(B.a,{onClick:function(){return s.push("/detail/".concat(r))}},n.a.createElement(U.a,{component:"img",alt:t,image:a,title:t,height:260})),n.a.createElement("div",{className:o.cardFooter},n.a.createElement(F.a,null,n.a.createElement(L.a,{variant:"subtitle1"},t)),c&&n.a.createElement(P.a,{className:o.cardActions},n.a.createElement(A.a,{"aria-label":"delete",onClick:function(){return l(j(r))}},n.a.createElement(W.a,null)))))},J=a(67),Y=a.n(J),q=Object(T.a)((function(e){return{errorMessage:{display:"flex",flexDirection:"row",alignItems:"center","& svg":{width:20,height:20}}}}));var z=function(e){var t=e.errorMessage,a=q();return n.a.createElement(L.a,{color:"error",className:a.errorMessage},n.a.createElement(Y.a,null),t)},K=Object(T.a)((function(){return{paper:{padding:"4px 8px",display:"flex",alignItems:"center",maxWidth:400,minWidth:280,marginBottom:48},input:{flex:1},iconButton:{padding:8},searchResults:{display:"flex",flexWrap:"wrap"},gridItem:{display:"flex"}}}));var X=function(){var e=K(),t=Object(i.b)(),a=Object(i.c)((function(e){return e.movies.searchResults})),r=Object(i.c)((function(e){return e.movies.currentPage})),c=Object(i.c)((function(e){return e.movies.searchTerm})),o=Object(i.c)((function(e){return e.movies.allSearchResults})),l=Object(i.c)((function(e){return e.movies.fetchingError})),s=Object(i.c)((function(e){return e.movies.isLoading})),u=n.a.createElement(S.a,{component:"form",className:e.paper,onSubmit:function(e){return function(e){e.preventDefault(),t(function(e){return{type:"REQUEST_MOVIES",searchTerm:e}}(c)),t(g(1))}(e)}},n.a.createElement(_.a,{className:e.input,placeholder:"Search For A Movie",value:c,onChange:function(e){return t(function(e){return{type:"SET_SEARCH_TERM",searchTerm:e}}(e.target.value))}}),n.a.createElement(A.a,{type:"submit",className:e.iconButton,"aria-label":"search"},n.a.createElement(V.a,null))),m=n.a.createElement(D.a,{container:!0,spacing:3,wrap:"wrap",alignItems:"stretch"},!s&&!l&&a&&a.map((function(t,a){return n.a.createElement(D.a,{item:!0,xs:6,sm:4,md:3,key:a,className:e.gridItem},n.a.createElement(H,{title:t.Title,image:"N/A"!==t.Poster?t.Poster:"https://critics.io/img/movies/poster-placeholder.png",id:t.imdbID,favouriteMovieDetail:!1}))})));return n.a.createElement("div",null,n.a.createElement(L.a,{variant:"h4",gutterBottom:!0},"Movies"),u,l&&n.a.createElement(z,{errorMessage:l}),s&&n.a.createElement("p",null,"Loading..."),n.a.createElement(k.a,{pageStart:0,initialLoad:!1,loadMore:function(){t(function(e,t){return{type:"REQUEST_ADDITIONAL_MOVIES",searchTerm:e,page:t}}(c,r+1)),t(g(r+1))},hasMore:a.length<o,useWindow:!0,loader:s&&n.a.createElement("div",{className:"loader",key:0},"Loading ...")},m))},Z=Object(T.a)((function(e){return{title:{marginBottom:48},redirectButton:{color:e.colors.blue,marginBottom:24},gridItem:{display:"flex"}}}));var $=function(){var e=Z(),t=Object(i.c)((function(e){return e.movies.favouriteMovies}));return n.a.createElement("div",null,n.a.createElement(L.a,{variant:"h4",className:e.title},"Favourite Movies"),!Object.keys(t).length&&"You have not added any movies to your fovourites yet.",n.a.createElement(D.a,{container:!0,spacing:3,wrap:"wrap",alignItems:"stretch"},t&&Object.keys(t).map((function(a,r){return n.a.createElement(D.a,{item:!0,xs:6,sm:4,md:3,key:r,className:e.gridItem},n.a.createElement(H,{favouriteMovieDetail:!0,title:t[a].Title,image:"N/A"!==t[a].Poster?t[a].Poster:"https://critics.io/img/movies/poster-placeholder.png",id:t[a].imdbID}))}))))},ee=a(69),te=a.n(ee),ae=a(145),re=Object(T.a)((function(e){var t;return{header:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"baseline","& button":{marginLeft:24},"& svg":{color:e.colors.blue}},movieDetails:(t={display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:24},Object(p.a)(t,e.breakpoints.down("sm"),{flexDirection:"column","& img":{maxWidth:300}}),Object(p.a)(t,"& > div:nth-child(2)",Object(p.a)({marginLeft:24},e.breakpoints.down("sm"),{marginTop:24,marginLeft:0})),t),detail:{marginBottom:40},redirectButton:{color:e.colors.blue,marginBottom:24}}}));var ne=function(){var e=re(),t=Object(w.e)(),a=Object(i.b)(),r=Object(i.c)((function(e){return e.movies.favouriteMovies})),c=Object(i.c)((function(e){return e.movies.detailsOfMovies})),o=Object(i.c)((function(e){return e.movies.fetchingError})),l=Object(i.c)((function(e){return e.movies.isLoading})),s=window.location.pathname.split("/").pop(),u=c[s];n.a.useEffect((function(){!c[s]&&a(function(e){return{type:"REQUEST_MOVIE_DETAIL",movieId:e}}(s))}),[s,c,a]);var m=n.a.createElement(A.a,{"aria-label":"delete",onClick:function(){return a(r[s]?j(s):{type:"ADD_TO_FAVOURITES",movie:u})}},r[s]?n.a.createElement(W.a,null):n.a.createElement(te.a,null));return o?n.a.createElement(z,{errorMessage:o}):!u||l?n.a.createElement("p",null,"Loading..."):n.a.createElement("div",null,n.a.createElement(ae.a,{size:"small",className:e.redirectButton,onClick:function(){return t.goBack()}},"\u2190 Return Back"),n.a.createElement("div",{className:e.header},n.a.createElement(L.a,{variant:"h4",gutterBottom:!0},u.Title),m),n.a.createElement(L.a,{variant:"subtitle1",gutterBottom:!0},"Rating: ",u.imdbRating,"/10 ",n.a.createElement("br",null),"Votes: ",u.imdbVotes),n.a.createElement("div",{className:e.movieDetails},n.a.createElement("img",{src:"N/A"!==u.Poster?u.Poster:"https://critics.io/img/movies/poster-placeholder.png",alt:u.Title}),n.a.createElement("div",null,n.a.createElement(L.a,{variant:"subtitle1",className:e.detail},n.a.createElement("b",null,u.Genre," | ",u.Year," | ",u.Country," |"," ",u.Runtime)),n.a.createElement(L.a,{variant:"subtitle1",className:e.detail},u.Plot),n.a.createElement(L.a,{variant:"subtitle1"},n.a.createElement("b",null,"Stars:")," ",u.Actors,n.a.createElement("br",null),n.a.createElement("b",null,"Director:")," ",u.Director,n.a.createElement("br",null),n.a.createElement("b",null,"Awards:")," ",u.Awards?u.Awards:"none"))))},ce=a(44),oe=a(146),ie=a(147),le=a(148),se=a(70),ue=a.n(se),me=a(48),be=a.n(me),de=Object(T.a)((function(e){var t;return{root:{backgroundColor:"white",flexGrow:1,"& header":Object(p.a)({padding:"24px 64px"},e.breakpoints.down("sm"),{padding:24})},container:{display:"flex",flexDirection:"row",alignItems:"flex-end","& span":Object(p.a)({color:e.colors.blue,marginRight:64},e.breakpoints.down("sm"),{marginRight:24})},link:(t={color:e.palette.secondary.main,marginRight:48,textDecoration:"none",fontWeight:"bold",borderBottom:"2px solid transparent",transitionDuration:"0.2s",transitionTimingFunction:"ease-in-out"},Object(p.a)(t,e.breakpoints.down("sm"),{marginRight:24}),Object(p.a)(t,"&:hover, &:focus",{borderBottom:"2px solid ".concat(e.colors.blue),color:e.palette.primary.main}),t),activeLink:{borderBottom:"2px solid ".concat(e.colors.blue),color:e.palette.primary.main}}}));var Ee=function(){var e=de(),t=n.a.useState(window.location.pathname),a=Object(ce.a)(t,2),r=a[0],c=a[1];return n.a.createElement("div",{className:e.root},n.a.createElement(oe.a,{position:"static",color:"transparent",className:e.appBar},n.a.createElement(ie.a,{maxWidth:"lg",className:e.container},n.a.createElement(le.a,null,n.a.createElement(ue.a,null)),n.a.createElement(y.b,{to:"/",onClick:function(){return c("/")},className:be()(e.link,Object(p.a)({},e.activeLink,"/"===r))},"Home"),n.a.createElement(y.b,{to:"/favourites",onClick:function(){return c("/favourites")},className:be()(e.link,Object(p.a)({},e.activeLink,"/favourites"===r))},"Favourite Movies"))))},pe=Object(T.a)((function(e){return{"@global":{body:{backgroundColor:e.colors.lightblue,margin:0,overflow:"scroll"}},container:{marginTop:48}}}));var fe=function(e){var t=e.children,a=pe();return n.a.createElement("div",null,n.a.createElement(Ee,null),n.a.createElement(ie.a,{maxWidth:"md",className:a.container},t))};var ve=function(){return n.a.createElement(y.a,null,n.a.createElement(fe,null,n.a.createElement(w.a,{path:"/",component:X,exact:!0}),n.a.createElement(w.a,{path:"/detail/:movieId",component:ne}),n.a.createElement(w.a,{path:"/favourites",component:$,exact:!0})))},ge=a(20),Oe=a.n(ge),he=a(13),je=Oe.a.mark(Te),xe=Oe.a.mark(Me),Ie=Oe.a.mark(ke),Re=Oe.a.mark(De),ye=Oe.a.mark(Se),we=a(91);function Te(e){var t,a,r;return Oe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.searchTerm,n.next=3,Object(he.b)(h(!0));case 3:return n.next=5,we.get("https://omdbapi.com/?apikey=".concat("ad7fb8d","&s=").concat(t));case 5:if(a=n.sent,!(r=a.data.Error)){n.next=12;break}return n.next=10,Object(he.b)(O(r));case 10:n.next=14;break;case 12:return n.next=14,Object(he.b)({type:"RECEIVE_MOVIES",movies:a.data});case 14:return n.next=16,Object(he.b)(h(!1));case 16:case"end":return n.stop()}}),je)}function Me(e){var t,a,r;return Oe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.searchTerm,a=e.page,n.next=3,Object(he.b)(h(!0));case 3:return n.next=5,we.get("https://omdbapi.com/?apikey=".concat("ad7fb8d","&s=").concat(t,"&page=").concat(a));case 5:if(r=n.sent,r.data.Error){n.next=10;break}return n.next=10,Object(he.b)({type:"RECEIVE_ADDITIONAL_MOVIES",additionalMovies:r.data});case 10:return n.next=12,Object(he.b)(h(!1));case 12:case"end":return n.stop()}}),xe)}function ke(e){var t,a,r;return Oe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.movieId,n.next=3,Object(he.b)(h(!0));case 3:return n.next=5,we.get("https://omdbapi.com/?apikey=".concat("ad7fb8d","&i=").concat(t));case 5:if(a=n.sent,!(r=a.data.Error)){n.next=10;break}return n.next=10,Object(he.b)(O(r));case 10:return n.next=12,Object(he.b)({type:"RECEIVE_MOVIE_DETAIL",movie:a.data});case 12:return n.next=14,Object(he.b)(h(!1));case 14:case"end":return n.stop()}}),Ie)}function De(){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(he.d)("*",Oe.a.mark((function e(t){var a;return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(he.c)();case 2:a=e.sent,console.log("action",t),console.log("state after",a);case 5:case"end":return e.stop()}}),e)})));case 2:case"end":return e.stop()}}),Re)}function Se(){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(he.d)("REQUEST_MOVIES",Te);case 2:return e.next=4,Object(he.d)("REQUEST_ADDITIONAL_MOVIES",Me);case 4:return e.next=6,Object(he.d)("REQUEST_MOVIE_DETAIL",ke);case 6:return e.next=8,Object(he.a)(De);case 8:case"end":return e.stop()}}),ye)}var _e=Object(l.a)({palette:{primary:{main:"rgba(0,0,0,0.87)"},secondary:{main:"rgb(169,171,177)"}},colors:{blue:"rgb(78,154,255)",lightblue:"rgb(245,247,252)"}}),Ae=n.a.createElement(s.a,{theme:_e},n.a.createElement(u.a,null),n.a.createElement(ve,null)),Ne=Object(b.a)(),Ve=Object(m.e)(R,Object(m.a)(Ne));Ne.run(Se),o.a.render(n.a.createElement(i.a,{store:Ve},Ae),document.querySelector("#root"))},78:function(e,t,a){e.exports=a(109)}},[[78,1,2]]]);
//# sourceMappingURL=main.59af1204.chunk.js.map