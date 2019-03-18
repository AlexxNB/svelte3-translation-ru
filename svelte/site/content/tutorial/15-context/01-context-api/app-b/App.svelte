<script>
	import Map from './Map.svelte';
	import MapMarker from './MapMarker.svelte';
</script>

<Map lat={35} lon={-84} zoom={3.5}>
	<MapMarker lat={37.8225} lon={-122.0024} label="Фитнес центр Svelte"/>
	<MapMarker lat={33.8981} lon={-118.4169} label="Парикмахерская Svelte"/>
	<MapMarker lat={29.7230} lon={-95.4189} label="Салон депиляции Svelte"/>
	<MapMarker lat={28.3378} lon={-81.3966} label="Диетические консультации Svelte"/>
	<MapMarker lat={40.6483} lon={-74.0237} label="ООО Svelte+"/>
	<MapMarker lat={40.6986} lon={-74.4100} label="Иедицинский центр Svelte"/>
</Map>