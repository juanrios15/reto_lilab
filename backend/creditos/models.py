from django.db import models

# Create your models here.

class ClienteCredito(models.Model):
    
    CALIFICACION_RIESGO = (
    ('B', 'Bueno'),
    ('R', 'Regular'),
    ('M', 'Malo'),
    )
     
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    dni = models.CharField(max_length=50)
    telefono = models.CharField(max_length=50, null=True, blank=True)
    email = models.EmailField(max_length=254, null=True, blank=True)
    deuda_sbs = models.FloatField(default=0)
    riesgo_sentinel = models.CharField(max_length=1,choices=CALIFICACION_RIESGO, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=True)
    
    
    def __str__(self):
        
        return f"{self.nombre} {self.apellido}"
    
    
class SolicitudCredito(models.Model):
    
    ESTADO_SOLICITUD = (
    ('A', 'Aprobado'),
    ('R', 'Rechazado'),
    ('E', 'Espera'),
    )
    cliente = models.ForeignKey(ClienteCredito, on_delete=models.CASCADE)
    monto = models.FloatField()
    indicador_ai = models.IntegerField(default=1)
    estado = models.CharField(max_length=1,choices=ESTADO_SOLICITUD, default="E")
    created_at = models.DateTimeField(auto_now_add=True, blank=True)
    
    def __str__(self):
        
        return f"{self.cliente} Monto: {self.monto}"