const icon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g transform="matrix(1.77979 0 0 1.77979 -7.369547 -21.393693)"><rect rx="20" height="64" width="64" fill="#1a1a1a" transform="matrix(.280932 0 0 .280932 4.140684 12.020348)"/><path d="M12.86 21.382l2.255-.06.467 17.603-2.255.06z" fill="#0f9"/><path d="M28.772 25.474l2.258-.06.347 13.1-2.258.06z" fill="#93f"/><path d="M13.328 38.98l18.05-.48.06 2.258-18.05.48z" fill="#0cf"/><path d="M12.8 19.125l11.28-.3.06 2.258-11.28.3z" fill="#ff9"/><path d="M26.4 21.02l-.06-2.256-2.26.06.18 6.77 6.77-.18-.06-2.256-2.26.06-.06-2.256z" fill="#f66"/><path d="M28.775 25.473l2.258-.06.06 2.258-2.258.06z" fill="#4c197f"/></g></svg>'

miro.onReady(() => {
	miro.initialize({
		extensionPoints: {
			toolbar: {
				title: 'GIPHY',
        toolbarSvgIcon: icon,
        librarySvgIcon: icon,
				onClick: function () {
					miro.board.openLibrary('GIPHY', 'library.html')
				}
			}
		}
	})
})

