<?php

return array(

	'alert' => array(

		'info' => array(
			
			'logout'		=> 'Non sei più loggato',
			'page_lang'		=> 'Stai inserendo in :lang',
			'welcome'		=> 'Bentornato, :user',

		),

		'error' => array(

			'clone_element'			=> 'Impossibile clonare l\'elemento',
			'clone_page'			=> 'Impossibile clonare la pagina',
			'create_item'			=> 'Impossibile creare l\'elemento',
			'delete_item'			=> 'Impossibile eliminare l\'elemento',
			'element_created'		=> 'Impossibile creare l\'elemento',
			'element_order'			=> 'Impossibile salvare l\'ordinamento',
			'input_validator'		=> 'Verifica i dati inseriti',
			'login' 				=> 'Accesso vietato, riprova nuovamente',			
			'not_granted'			=> 'Modifica non consentita',
			'page_cant_delete'		=> 'Impossibile eliminare questa pagina',
			'page_created'			=> 'Impossibile creare la pagina',
			'page_has_elements'		=> 'Questa pagina contiene ancora elementi',
			'page_has_subpages'		=> 'Questa pagina contiene ancora sottopagine',
			'page_lang'				=> 'Impossibile cambiare lingua',
			'page_order'			=> 'Impossibile salvare l\'ordinamento',
			'save'					=> 'Errore di salvataggio',
			'session_exp'			=> 'Sessione scaduta, esegui login',
			'unauthorized'			=> 'Accesso non autorizzato, esegui login',
			'upload_completed'		=> 'Impossibile caricare files',

		),

		'success' => array(

			'element_cloned'	=> 'Elemento clonato correttamente',
			'element_created'	=> 'Nuovo elemento creato',
			'element_deleted'	=> 'L\'elemento è stato eliminato',
			'element_order'		=> 'Ordine degli elementi salvato',
			'file_created'		=> 'Nuovo file inserito correttamente',
			'item_remove'		=> 'Questo elemento è stato rimosso',
			'page_cloned'		=> 'Pagina clonata correttamente',
			'page_created'		=> 'Nuova pagina creata',
			'page_deleted'		=> 'La pagina è stata eliminata',
			'page_order'		=> 'Ordine di pagina salvato',
			'save'				=> 'Informazioni salvate',
			'upload_completed'	=> 'File caricati correttamente',
			'upload_comp_err'	=> 'File caricati con qualche errore',

		),

	),

	'form' => array(

		'button' => array(

			'cancel'		=> 'Annulla',
			'choose'		=> 'Seleziona file',
			'clone'			=> 'Clona',
			'create'		=> 'Crea',
			'element' 		=> 'Elemento',
			'delete'		=> 'Elimina',
			'ok'			=> 'Ok',
			'page' 			=> 'Pagina',
			'save'			=> 'Salva',
			'upload'		=> 'Avvia caricamento',
			'upload_files'	=> 'Carica file',

		),

		'infos' => array(

			'create_file' => 'Rinomina questo file in ":rename" e caricalo via FTP nella cartella ":upload"'

		),

		'select' => array(

			'admin' 	=> 'Amministratore',
			'blogs'		=> 'Blog e notizie',
			'editor' 	=> 'Editore',
			'guest' 	=> 'Visitatore',
			'manager' 	=> 'Manager',
			'pages'		=> 'Altre pagine',
			'products'	=> 'Prodotti',
			'user' 		=> 'Utente',
			
		),

	),

	'heading' => array(

		'element' => array(

			'bar_title' 	=> 'Elementi di pagina',
			'content_title' => 'Contenuti',

		),

		'file' => array(

			'bar_title' => 'File di pagina',

		),

		'layout' => array(

			'bar_title' => 'Disposizione dei contenuti',

		),

		'marker' => array(

			'bar_title' => 'Markers',

		),

		'option' => array(

			'bar_title' => 'Opzioni',

		),

		'page' => array(

			'bar_title' 			=> 'Gestione pagine',
			'layout_title' 			=> 'Layout',
			'seo_title'		 		=> 'Seo',
			'files_title' 			=> 'Caricamento Files',
			'files_create_title' 	=> 'Creazione Files',
			'linked_title' 			=> 'Pagine collegate',
			'settings_title' 		=> 'Impostazioni',

		),

	),

	'label' => array(

		'page' => array(

			'settings' => array(

				'browse_by' 	=> 'Chi la può vedere?',
				'check_all_ele' => 'Tutti gli elementi della pagina',
				'choose_lang'	=> 'In quale lingua clonare la pagina?',
				'clone'			=> '[CLONED]',
				'create_slug' 	=> 'Slug',
				'edit_by' 		=> 'Chi la può modificare?',
				'force_delete'	=> 'Rimuovi la pagina e svincola tutti gli elementi',
				'may_contain'	=> 'Cosa potrà contenere?',
				'media_all'		=> 'Tutti i media della pagina',
				'name' 			=> 'Nome pagina',
				'page_include'	=> 'Includi anche',
				'set_hp' 		=> 'Home Page',
				'slug' 			=> 'Indirizzo pagina',
				'slug_preview'	=> 'Indirizzo completo',

			),

			'layout' => array(

				'template'		=> 'Template di pagina',
				'header'		=> 'Header di pagina',
				'layout'		=> 'Layout di pagina',
				'footer'		=> 'Footer di pagina',

			),

			'seo'	=> array(

				'title'	=> 'Page title',
				'keyw'	=> 'Page keywords',
				'descr'	=> 'Page decription',

			),

			'files'	=> array(

				'custom_upload'	=> 'Crea l\'inserimento di nuovo file',
				'file_name'		=> 'Nome del file',
				'file_size'		=> 'Peso del file',
				'force_delete'	=> 'Elimina il file se non associato a nessun\'altra pagina',
				'ftp_upload'	=> 'Carica il file attraverso una connessione FTP',
				'max_item'		=> 'Numero massimo di elementi per volta',
				'max_upload' 	=> 'Dimensione massima',
				'mimes' 		=> 'Formati consentiti',

			),	

		),

		'element' => array(

			'settings' => array(

				'attrib'			=> 'Attributo ID dell\'elemento',
				'create_attrib' 	=> 'id',
				'name' 				=> 'Nome dell\'elemento',
				'page_target'		=> 'Associare l\'elemento clonato alla pagina',
				'self_element' 		=> 'Indipendente',
				'zone' 				=> 'Dove inserire questo elemento?',

			),

		),

	),
	
	'marker' => array(

		'_api' => array(

			'file_name' => 'nome file',
			'height'	=> 'altezza',
			'mandatory' => 'obbligatorio',
			'none'		=> 'nessuna configurazione',
			'optional'	=> 'opzionale',
			'width'		=> 'larghezza',

		),

		'back' => array(

			'description' => 'Crea un link alla pagina precedente',

		),
		
		'image'	=> array(

			'description' => 'Visualizza un\'immagine in base al suo nome',

		),

	),

	'modal' => array(

		'title' => array(

			'clone_element'		=> 'Clonare questo elemento?',
			'clone_page'		=> 'Clonare questa pagina?',
			'delete_page' 		=> 'Eliminare questa pagina?',
			'detach_file' 		=> 'Dissociare il file dalla pagina?',
			'remove_element' 	=> 'Rimuovere l\'elemento dalla pagina?',

		),

	),

	'template' => array(

		'element' => array(

			'new'			=> 'Nuovo elemento',

		),

		'page' => array(

			'new'			=> 'Nuova pagina',

		),

	),

	'validation' => array(

		'errors' => array(

			'alpha_dash'	=> 'Questo campo può contenere solo lettere, numeri e trattini',
			'ext_mimes'		=> 'Il formato del file non è consentito',
			'integer'		=> 'Il valore deve essere un numero intero',
			'is_slug'		=> 'Clicca il tasto per generare uno slug corretto',
			'file_size'		=> 'Questo file è superiore al limite consentito',
			'not_image'		=> 'Non puoi inserire immagini',
			'required' 		=> 'Questo campo è obbligatorio',
			'unique_file' 	=> 'Questo file è già presente nel sistema',
			'unique_name' 	=> 'Questo nome è già presente per questa lingua',
			'unique_slug' 	=> 'Questo slug è già presente per questa lingua',

		),

	),

);