export default {
  'alert.torrent.add': `{countElement} {count, plural,
      =1 {torrent agregado}
      other {torrents agregados}
    }.`,
  'alert.torrent.add.failed': `{countElement} {count, plural,
      =1 {torrent fallo al agregar}
      other {torrents fallaron al agregarse}
    }.`,
  'alert.torrent.move': `{countElement} {count, plural,
      =1 {torrent se ha movido}
      other {torrents se han movido}
    }.`,
  'alert.torrent.move.failed': `{countElement} {count, plural,
      =1 {torrent fallo al moverse}
      other {torrents fallaron al moverse}
    }.`,
  'alert.torrent.remove': `{countElement} {count, plural,
      =1 {torrent se ha eliminado}
      other {torrents se han eliminado}
    }.`,
  'alert.torrent.remove.failed': `{countElement} {count, plural,
      =1 {torrent fallo al eliminarse}
      other {torrents fallaron al eliminarse}
    }.`,
  'alert.settings.saved': 'Configuración Guardada.',

  'auth.add.user': 'Agregar usuario',
  'auth.create.account': 'Crear Cuenta',
  'auth.create.an.account': 'Crear una Cuenta',
  'auth.error.username.empty': 'Nombre de usuario no puede estar en blanco.',
  'auth.log.in': 'Iniciar Sesión',
  'auth.login': 'Acceder',
  'auth.password': 'Contraseña',
  'auth.user.accounts': 'Cuentas de Usuario',
  'auth.username': 'Nombre de Usuario',

  'button.add': 'Agregar',
  'button.cancel': 'Cancelar',
  'button.no': 'No',
  'button.save': 'Guardar Configuración',
  'button.state.adding': 'Agregando...',
  'button.yes': 'Sí',

  'feeds.add.automatic.download.rule': 'Agregar Regla de Descarga',
  'feeds.add.feed': 'Agregar Fuente',
  'feeds.applicable.feed': 'Fuente Correspondiente',
  'feeds.apply.tags': 'Aplicar Etiquetas',
  'feeds.exclude.pattern': 'Patrón de Exclusión',
  'feeds.existing.feeds': 'Fuentes Existentes',
  'feeds.existing.rules': 'Reglas Existentes',
  'feeds.label': 'Rotulo',
  'feeds.match.count': `{count, plural, =1 {# Encontrado} other {# Encontrados}}`,
  'feeds.match.pattern': 'Patrón de Inclusión',
  'feeds.match': 'Encontrado',
  'feeds.no.feeds.available': 'No hay fuentes disponibles',
  'feeds.no.feeds.defined': 'No hay fuentes definidas',
  'feeds.no.rules.defined': 'No hay reglas definidas',
  'feeds.regEx': 'RegEx',
  'feeds.select.feed': 'Seleccionar Fuente',
  'feeds.select.interval': 'Intervalo',
  'feeds.start.on.load': 'Iniciar al Cargar',
  'feeds.tabs.download.rules': 'Reglas de Descarga',
  'feeds.tabs.feeds': 'Fuentes',
  'feeds.tabs.heading': 'Fuentes de Torrent',
  'feeds.tags': 'Etiquetas',
  'feeds.time.hr': '{durationValue} hr',
  'feeds.time.min': '{durationValue} min',
  'feeds.torrent.destination': 'Destinación de Torrent',
  'feeds.url': 'URL',
  'feeds.validation.invalid.regular.expression': 'RegEx invalida.',
  'feeds.validation.must.select.feed': 'Debe seleccionar una fuente',
  'feeds.validation.must.specify.destination':
    'Debe seleccionar una destinación.',
  'feeds.validation.must.specify.label': 'Debe seleccionar un rotulo',
  'feeds.validation.must.specify.valid.feed.url':
    'Debe seleccionar un URL de fuente valido.',

  'filesystem.empty.directory': 'Carpeta vacía',
  'filesystem.error.eacces': 'Flood no tiene permisos para leer esta carpeta.',
  'filesystem.error.enoent': 'Esta ruta no existe. Se creara.',
  'filesystem.fetching': 'Cargando estructura de carpeta...',

  'filter.all': 'Todo',
  'filter.status.title': 'Filtrar por Estado',
  'filter.status.downloading': 'Descargando',
  'filter.status.completed': 'Completo',
  'filter.status.active': 'Activo',
  'filter.status.inactive': 'Inactivo',
  'filter.status.error': 'Error',
  'filter.tracker.title': 'Filtrar por Tracker',
  'filter.tag.title': 'Filtrar por Etiqueta',
  'filter.untagged': 'Sin Etiqueta',

  'general.ago': 'hace',
  'general.at': 'en',
  'general.to': 'hasta',
  'general.of': 'de',

  'general.clipboard.copy': 'Copiar',
  'general.clipboard.copied': 'Copiado',

  'locale.language.en': 'Inglés',
  'locale.language.es': 'Español',
  'locale.language.fr': 'Francés',
  'locale.language.nl': 'Holandés',

  'mediainfo.execError':
    'Se ha encontrado un error al correr Mediainfo. Confirme que Mediainfo este instalado y disponible a Flood en el PATH',
  'mediainfo.fetching': 'Fetching...',
  'mediainfo.heading': 'Mediainfo',

  'notification.torrent.finished.heading': 'Descarga Completada',
  'notification.torrent.finished.body': '{name}',
  'notification.torrent.errored.heading': 'Error Reportado',
  'notification.torrent.errored.body': '{name}',
  'notification.clear.all': 'Borrar Todos',
  'notification.showing': 'Mostrando',

  'priority.dont.download': 'No Descargar',
  'priority.high': 'Alta',
  'priority.low': 'Baja',
  'priority.normal': 'Normal',

  'settings.bandwidth.slots.download.divider.label':
    'Divisor de Espacios de Descarga',
  'settings.bandwidth.slots.download.global.label':
    'Cant. Global de Espacios de Descargas',
  'settings.bandwidth.slots.download.label':
    'Cant. por Torrent de Espacios de Descarga',
  'settings.bandwidth.slots.heading': 'Disponibilidad de Espacios',
  'settings.bandwidth.slots.upload.divider.label':
    'Divisor de Espacios de Subida',
  'settings.bandwidth.slots.upload.global.label':
    'Cant. Global de Espacios de Subida',
  'settings.bandwidth.slots.upload.label':
    'Cant. por Torrent de Espacios de Descarga',
  'settings.bandwidth.transferrate.dropdown.preset.download.label':
    'Predeterminados de Desplegable: Descarga',
  'settings.bandwidth.transferrate.dropdown.preset.upload.label':
    'Predeterminados de Desplegable: Subida',
  'settings.bandwidth.transferrate.global.throttle.download':
    'Regulador Global de Velocidad de Descarga',
  'settings.bandwidth.transferrate.global.throttle.upload':
    'Regulador Global de Velocidad de Subida',
  'settings.bandwidth.transferrate.heading': 'Reguladores de Velocidad',

  'settings.connectivity.dht.label': 'Habilitar DHT',
  'settings.connectivity.dht.port.label': 'Puerto para DHT',
  'settings.connectivity.dpd.heading':
    'Descubrimiento de Peers Descentralizado',
  'settings.connectivity.incoming.heading': 'Conexiones Entrantes',
  'settings.connectivity.ip.hostname.label': 'IP/Hostname Presentado',
  'settings.connectivity.max.http.connections':
    'Máxima Cant. de Conexiones HTTP',
  'settings.connectivity.peer.exchange.label': 'Habilitar Intercambio de Peers',
  'settings.connectivity.peers.desired.label': 'Cant. de Peers Deseada',
  'settings.connectivity.peers.heading': 'Peers',
  'settings.connectivity.peers.max.label': 'Cant. Máxima de Peers',
  'settings.connectivity.peers.min.label': 'Cant. Mínima de Peers',
  'settings.connectivity.peers.seeding.max.label':
    'Cant. Máxima de Peers en Seeding',
  'settings.connectivity.peers.seeding.min.label':
    'Cant. Mínima de Peers en Seeding',
  'settings.connectivity.port.open.label': 'Puerto Abierto',
  'settings.connectivity.port.randomize.label': 'Puerto Aleatorio',
  'settings.connectivity.port.range.label': 'Rango de Puertos',

  'settings.resources.disk.check.hash.label': 'Verificar Hash al Terminar',
  'settings.resources.disk.download.location.label':
    'Carpeta de Descargas Predeterminada',
  'settings.resources.disk.heading': 'Disco',
  'settings.resources.max.open.files': 'Cant. Máxima de Archivos Abiertos',
  'settings.resources.memory.heading': 'Memoria',
  'settings.resources.memory.max.label': 'Utilización Máxima de Memoria',

  'settings.tabs.bandwidth': 'Ancho de Banda',
  'settings.tabs.connectivity': 'Conectividad',
  'settings.tabs.heading': 'Configuración',
  'settings.tabs.resources': 'Recursos',
  'settings.tabs.authentication': 'Autenticación',
  'settings.tabs.userinterface': 'Interfaz de Usuario',

  'settings.ui.locale': 'Región',
  'settings.ui.language': 'Idioma',
  'settings.ui.torrent.list': 'Exhibición de Torrents',
  'settings.ui.torrent.size': 'Tamaño de Torrent',
  'settings.ui.torrent.size.expanded': 'Modo Expandido',
  'settings.ui.torrent.size.condensed': 'Modo Condensado',
  'settings.ui.torrent.details.tags.placement':
    'En el modo expandido, las etiquetas se ven mejor al final de la lista.',

  'sidebar.button.feeds': 'Fuentes',
  'sidebar.button.notifications': 'Notificaciones',
  'sidebar.button.settings': 'Ajustes',
  'sidebar.button.speedlimits': 'Limites de Velocidad',

  'sidebar.search.placeholder': 'Buscar torrents',

  'sidebar.transferdata.downloaded': 'Descargado',
  'sidebar.transferdata.uploaded': 'Subido',

  'speed.unlimited': 'Sín Límite',

  'unit.size.byte': 'B',
  'unit.size.kilobyte': 'kB',
  'unit.size.megabyte': 'MB',
  'unit.size.gigabyte': 'GB',
  'unit.size.terabyte': 'TB',
  'unit.speed': '{baseUnit}/s',
  'unit.time.year': 'yr',
  'unit.time.week': 'wk',
  'unit.time.day': 'd',
  'unit.time.hour': 'hr',
  'unit.time.minute': 'm',
  'unit.time.second': 's',
  'unit.time.infinity': '∞',

  'torrents.add.button.add': 'Agregar Torrent',
  'torrents.add.destination.label': 'Destinación',
  'torrents.add.destination.placeholder': 'Destinación',
  'torrents.add.heading': 'Agregar Torrents',
  'torrents.add.start.label': 'Iniciar Descarga',
  'torrents.add.tab.file.browse': 'o haga clic para navegar',
  'torrents.add.tab.file.drop': 'Arrastrar archivos hacia aquí,',
  'torrents.add.tab.file.title': 'Con Archivo',
  'torrents.add.tab.url.input.placeholder': 'URL de Torrent o Magnet Link',
  'torrents.add.tab.url.title': 'Con URL',
  'torrents.add.torrents.label': 'Torrents',

  'torrents.destination.base_path': 'Usar como Base Path',

  'torrents.details.actions.pause': 'Pausar',
  'torrents.details.actions.start': 'Comenzar',
  'torrents.details.actions.stop': 'Parar',
  'torrents.details.details': 'Detalles',
  'torrents.details.files': 'Archivos',
  'torrents.details.files.download.file': `{count, plural,
    =1 {Archivo}
    other {Archivos}
  }`,
  'torrents.details.general.comment': 'Comentario',
  'torrents.details.general.connected': '{connected} conectados de {total}',
  'torrents.details.general.date.added': 'Agregado en',
  'torrents.details.general.date.created': 'Creado en',
  'torrents.details.general.downloaded': 'Descargado',
  'torrents.details.general.free.disk.space': 'Espacio de Disco Libre',
  'torrents.details.general.hash': 'Hash',
  'torrents.details.general.heading.general': 'General',
  'torrents.details.general.heading.torrent': 'Torrent',
  'torrents.details.general.heading.tracker': 'Tracker',
  'torrents.details.general.heading.transfer': 'Transferencia',
  'torrents.details.general.location': 'Carpeta',
  'torrents.details.general.none': 'Ninguno',
  'torrents.details.general.peers': 'Peers',
  'torrents.details.general.scheduler.ignored': 'Ignorado',
  'torrents.details.general.scheduler.obeyed': 'Seguido',
  'torrents.details.general.scheduler': 'Programador',
  'torrents.details.general.seeds': 'Seeds',
  'torrents.details.general.size': 'Tamaño',
  'torrents.details.general.tags': 'Etiquetas',
  'torrents.details.general.tracker.message': 'Mensaje de Tracker',
  'torrents.details.general.type.private': 'Privado',
  'torrents.details.general.type.public': 'Publico',
  'torrents.details.general.type': 'Tipo',
  'torrents.details.mediainfo': 'Mediainfo',
  'torrents.details.peers.no.data': 'No existen Peers para este torrent.',
  'torrents.details.peers': 'Peers',
  'torrents.details.selected.files': `{count, plural,
    =1 {{countElement} archivo seleccionado}
    other {{countElement} archivos seleccionados}
  }`,
  'torrents.details.selected.files.set.priority': 'Ajustar Prioridad',
  'torrents.details.trackers.no.data':
    'No existe información de tracker para este torrent.',
  'torrents.details.trackers.type': 'Tipo',
  'torrents.details.trackers': 'Trackers',

  'torrents.list.clear.filters': 'Borrar Filtros',
  'torrents.list.context.check.hash': 'Verificar Hash',
  'torrents.list.context.details': 'Detalles de Torrent',
  'torrents.list.context.move': 'Configurar Carpeta de Descarga',
  'torrents.list.context.pause': 'Pausar',
  'torrents.list.context.priority': 'Prioridad',
  'torrents.list.context.remove': 'Eliminar',
  'torrents.list.context.set.tags': 'Configurar Etiquetas',
  'torrents.list.context.start': 'Comenzar',
  'torrents.list.context.stop': 'Parar',
  'torrents.list.no.torrents': 'No hay torrents',
  'torrent.list.peers': '{connected} {of} {total}',
  'torrent.list.peers.of': 'de',

  'torrents.move.button.set.location': 'Configurar',
  'torrents.move.button.state.setting': 'Guardando...',
  'torrents.move.data.label': 'Mover archivos',
  'torrents.move.heading': 'Configurar Carpeta de Descarga',

  'torrents.properties.date.added': 'Agregado en',
  'torrents.properties.base.path': 'Carpeta Base',
  'torrents.properties.comment': 'Comentario',
  'torrents.properties.creation.date': 'Creado en',
  'torrents.properties.download.speed': 'Velocidad de Descarga',
  'torrents.properties.download.total': 'Cant. Descargada',
  'torrents.properties.eta': 'ETA',
  'torrents.properties.free.disk.space': 'Espcio de Disco Libre',
  'torrents.properties.hash': 'Hash',
  'torrents.properties.ignore.schedule': 'Ignorar Programador',
  'torrents.properties.is.private': 'Privado',
  'torrents.properties.name': 'Nombre',
  'torrents.properties.percentage': 'Porcentaje Descargado',
  'torrents.properties.ratio': 'Ratio',
  'torrents.properties.size': 'Tamaño de Archivo',
  'torrents.properties.tags': 'Etiquetas',
  'torrents.properties.tracker.message': 'Mensaje de Tracker',
  'torrents.properties.upload.speed': 'Velocidad de Subida',
  'torrents.properties.upload.total': 'Cant. Subida',

  'torrents.remove.are.you.sure': `Are you sure you want to remove {count, plural,
      =0 {zero torrents}
      =1 {un torrent}
      other {# torrents}
    }?`,
  'torrents.remove.delete.data': 'Delete data',
  'torrents.remove.error.no.torrents.selected':
    'No ha seleccionado un torrent.',
  'torrents.remove': 'Eliminar Torrents',

  'torrents.set.tags.button.set': 'Configurar',
  'torrents.set.tags.heading': 'Configurar Etiquetas',

  'torrents.sort.title': 'Ordenar Por',
};
