from rest_framework.routers import DefaultRouter
from creditos.views import SolicitudCreditoViewSet
router = DefaultRouter()

router.register('solicitudes', SolicitudCreditoViewSet, basename="user")

urlpatterns = router.urls