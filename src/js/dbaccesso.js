function GuardarDatos(tbl_name, data) {
    sessionStorage.setItem(tbl_name, JSON.stringify(data));
}

GuardarDatos("db_usuarios",data_user);
GuardarDatos("db_encargado",data_encargado);
GuardarDatos("db_HistorialAvisosEnviados",dato_HistorialAvisosEnviados);
GuardarDatos("data_enviaravisos",data_enviaravisos);
GuardarDatos("EnvioFactura",EnvioFactura);
GuardarDatos("HistorialPedidos",HistorialPedidos);

