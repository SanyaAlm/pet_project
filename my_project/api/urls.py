from django.urls import path, include
from rest_framework import routers

from api.views import UsersModelViewSet

router = routers.DefaultRouter()
router.register('users', UsersModelViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
